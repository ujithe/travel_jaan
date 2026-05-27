#!/usr/bin/env python3
"""
Convert all storage images to WebP and update the database paths.

Usage:
    pip install Pillow pymysql
    python convert_images_to_webp.py

What it does:
  1. Reads DB credentials from .env
  2. Finds all .jpg/.jpeg/.png files under storage/app/public/
  3. Converts each to WebP (quality 82, max 1400px wide)
  4. Updates image paths in: destinations, visas, blog_posts, testimonials
  5. Deletes the original file after a successful conversion
"""

import os
import sys
from pathlib import Path

# ── dependency check ──────────────────────────────────────────────────────────
try:
    from PIL import Image
except ImportError:
    sys.exit("ERROR: Pillow not installed. Run: pip install Pillow")

try:
    import pymysql
except ImportError:
    sys.exit("ERROR: pymysql not installed. Run: pip install pymysql")

# ── config ───────────────────────────────────────────────────────────────────
SCRIPT_DIR  = Path(__file__).parent
STORAGE_DIR = SCRIPT_DIR / "storage" / "app" / "public"
WEBP_QUALITY = 82          # 80-85 is a sweet spot: great quality, ~70 % smaller
MAX_WIDTH    = 1400         # pixels — resize wider images proportionally

# Tables and columns that store image paths
DB_IMAGE_COLUMNS = [
    ("destinations", "image"),
    ("visas",        "image"),
    ("blog_posts",   "featured_image"),
    ("testimonials", "image"),
]

# ── helpers ───────────────────────────────────────────────────────────────────
def parse_env(env_path: Path) -> dict:
    env = {}
    with open(env_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            value = value.strip().strip('"').strip("'")
            env[key.strip()] = value
    return env


def convert_to_webp(src: Path) -> tuple[Path, int, int]:
    """Convert src image to WebP. Returns (webp_path, orig_bytes, new_bytes)."""
    orig_bytes = src.stat().st_size
    dest = src.with_suffix(".webp")

    with Image.open(src) as img:
        # Resize if too wide
        if img.width > MAX_WIDTH:
            new_height = int(img.height * MAX_WIDTH / img.width)
            img = img.resize((MAX_WIDTH, new_height), Image.LANCZOS)

        # Normalise colour mode
        if img.mode == "P":
            img = img.convert("RGBA")
        if img.mode == "RGBA":
            img.save(dest, "WEBP", quality=WEBP_QUALITY, method=6)
        else:
            img.convert("RGB").save(dest, "WEBP", quality=WEBP_QUALITY, method=6)

    return dest, orig_bytes, dest.stat().st_size


def db_update_path(conn, old_url: str, new_url: str) -> int:
    """Replace old_url with new_url in every image column. Returns rows changed."""
    rows_changed = 0
    with conn.cursor() as cur:
        for table, col in DB_IMAGE_COLUMNS:
            cur.execute(
                f"UPDATE `{table}` SET `{col}` = %s WHERE `{col}` = %s",
                (new_url, old_url),
            )
            rows_changed += cur.rowcount
    conn.commit()
    return rows_changed


# ── storage path → /storage/... URL ──────────────────────────────────────────
def to_storage_url(abs_path: Path) -> str:
    """storage/app/public/destinations/x.jpg  →  /storage/destinations/x.jpg"""
    rel = abs_path.relative_to(STORAGE_DIR)
    return "/storage/" + str(rel).replace("\\", "/")


# ── main ──────────────────────────────────────────────────────────────────────
def main():
    env_file = SCRIPT_DIR / ".env"
    if not env_file.exists():
        sys.exit("ERROR: .env not found. Run this script from the project root.")

    env = parse_env(env_file)

    # Connect to MySQL
    print("Connecting to database …")
    try:
        conn = pymysql.connect(
            host     = env.get("DB_HOST", "127.0.0.1"),
            port     = int(env.get("DB_PORT", 3306)),
            user     = env.get("DB_USERNAME", "root"),
            password = env.get("DB_PASSWORD", ""),
            database = env.get("DB_DATABASE", ""),
            charset  = "utf8mb4",
            autocommit = False,
        )
        print(f"Connected: {env.get('DB_DATABASE')}\n")
    except Exception as exc:
        sys.exit(f"ERROR: DB connection failed: {exc}")

    # Collect images
    extensions = {".jpg", ".jpeg", ".png"}
    images = sorted(
        p for p in STORAGE_DIR.rglob("*")
        if p.is_file() and p.suffix.lower() in extensions
    )

    if not images:
        print("No images found in storage/app/public/ — nothing to do.")
        conn.close()
        return

    total_orig = total_new = db_rows = 0
    ok = fail = 0

    col_w = max(len(str(p.relative_to(STORAGE_DIR))) for p in images) + 2
    print(f"{'File':<{col_w}}  {'Before':>9}  {'After':>9}  {'Saved':>7}  DB")
    print("-" * (col_w + 35))

    for img_path in images:
        label = str(img_path.relative_to(STORAGE_DIR))
        try:
            webp_path, orig_b, new_b = convert_to_webp(img_path)

            old_url = to_storage_url(img_path)
            new_url = to_storage_url(webp_path)
            rows = db_update_path(conn, old_url, new_url)

            # Remove original only after DB is updated
            img_path.unlink()

            saved_pct = (1 - new_b / orig_b) * 100
            print(
                f"{label:<{col_w}}  "
                f"{orig_b/1024:>8.0f}K  "
                f"{new_b/1024:>8.0f}K  "
                f"{saved_pct:>6.0f}%  "
                f"{rows} row{'s' if rows != 1 else ''}"
            )

            total_orig += orig_b
            total_new  += new_b
            db_rows    += rows
            ok         += 1

        except Exception as exc:
            print(f"{label:<{col_w}}  FAILED: {exc}")
            fail += 1

    conn.close()

    saved_mb  = (total_orig - total_new) / 1_048_576
    saved_pct = (1 - total_new / total_orig) * 100 if total_orig else 0

    print("\n" + "=" * (col_w + 35))
    print(f"  Converted : {ok} image{'s' if ok != 1 else ''}  ({fail} failed)")
    print(f"  Before    : {total_orig/1_048_576:.1f} MB")
    print(f"  After     : {total_new/1_048_576:.1f} MB")
    print(f"  Saved     : {saved_mb:.1f} MB  ({saved_pct:.0f}%)")
    print(f"  DB rows   : {db_rows} updated")
    print("=" * (col_w + 35))


if __name__ == "__main__":
    main()
