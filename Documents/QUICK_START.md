# JAAN Travels - Quick Setup Checklist

## 🚀 Get Started in 5 Minutes

Follow these steps to have JAAN Travels running locally:

---

## Step 1: Install Dependencies ✅
```bash
cd u:\Jaan\ (Projects)\travel_jaan
composer install
npm install
```

---

## Step 2: Environment Setup ✅
```bash
cp .env.example .env
php artisan key:generate
```

### Edit .env file with your database:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=jaan_travels
DB_USERNAME=root
DB_PASSWORD=
```

---

## Step 3: Create Database ✅
```bash
# Create database using MySQL/phpMyAdmin or:
mysql -u root -p -e "CREATE DATABASE jaan_travels;"
```

---

## Step 4: Run Migrations ✅
```bash
php artisan migrate
```

**Expected output:**
```
Migration table created successfully.
Migrating: ... create_destinations_table
...
Migrated: ... create_destinations_table (X ms)
```

---

## Step 5: Seed Sample Data ✅
```bash
php artisan db:seed
```

**This creates:**
- ✅ Admin user (admin@jaantravels.lk)
- ✅ 20 destinations worldwide
- ✅ 3 special offers
- ✅ 6 services
- ✅ 6 FAQs with answers
- ✅ 3 blog posts
- ✅ 3 testimonials
- ✅ Company settings

---

## Step 6: Build Frontend ✅
```bash
npm run dev
```

**For production:**
```bash
npm run build
```

---

## Step 7: Start Development Server ✅
```bash
# In a new terminal/tab:
php artisan serve
```

**Output should show:**
```
Laravel development server started: http://127.0.0.1:8000
```

---

## ✅ You're Ready! Visit:

| URL | Purpose |
|-----|---------|
| http://localhost:8000 | 🏠 Website |
| http://localhost:8000/login | 🔐 Admin Login |
| http://localhost:8000/admin/destinations | 📍 Manage Destinations |
| http://localhost:8000/admin/blog-posts | 📝 Manage Blog |
| http://localhost:8000/admin/special-offers | 🎉 Manage Offers |

---

## 🔐 Admin Credentials

**Email:** admin@jaantravels.lk  
**Password:** password

---

## 📝 Configuration

### Company Settings Location
**File:** `config/jaan.php`

Quick edits:
- Company name
- Phone numbers
- WhatsApp number
- Office address
- Hours
- Social media

---

## 🌐 Routes to Test

### Public Pages
```
✅ http://localhost:8000/                    - Homepage
✅ http://localhost:8000/about               - About Us
✅ http://localhost:8000/destinations        - All Destinations
✅ http://localhost:8000/destinations/dubai  - Destination Detail
✅ http://localhost:8000/services            - Services
✅ http://localhost:8000/blog                - Blog Posts
✅ http://localhost:8000/faq                 - FAQ
✅ http://localhost:8000/contact             - Contact
✅ http://localhost:8000/special-offers      - Offers
```

### Admin Pages (After Login)
```
✅ http://localhost:8000/admin/destinations       - CRUD Destinations
✅ http://localhost:8000/admin/blog-posts         - CRUD Blog
✅ http://localhost:8000/admin/special-offers     - CRUD Offers
✅ http://localhost:8000/admin/testimonials       - CRUD Testimonials
✅ http://localhost:8000/admin/faqs               - CRUD FAQs
✅ http://localhost:8000/admin/services           - CRUD Services
```

---

## 🔍 Check Database

### View Sample Data
```bash
php artisan tinker
>>> Destination::count()
>>> BlogPost::count()
>>> SpecialOffer::count()
>>> exit
```

---

## 🎨 Customization Examples

### Change Company Name
**File:** `config/jaan.php`
```php
'name' => 'Your Company Name',
```

### Change WhatsApp Number
**File:** `config/jaan.php`
```php
'whatsapp' => '+94 71 123 4567',
```

### Change Hero Text
**File:** `resources/js/Pages/Home.jsx`
```jsx
<h1 className="text-4xl md:text-5xl font-bold mb-4">
    Your Headline Here
</h1>
```

---

## 🐛 Troubleshooting

### Issue: "Class not found" errors
**Solution:**
```bash
php artisan optimize:clear
composer dump-autoload
```

### Issue: Frontend not updating
**Solution:**
```bash
npm run dev
# Keep this terminal running while developing
```

### Issue: Database errors
**Solution:**
```bash
php artisan migrate:fresh --seed
# WARNING: This deletes all data
```

### Issue: WhatsApp button not working
**Check:** `config/jaan.php` - WhatsApp number format (no spaces, no +)

---

## 📱 Test on Mobile

### View on mobile device:
```bash
# Find your IP:
ipconfig getifaddr en0    # Mac/Linux
ipconfig                  # Windows

# Visit from mobile:
http://YOUR_IP:8000
```

---

## 🚀 Ready for Production?

See `PROJECT_SETUP.md` for deployment checklist.

---

## 📚 Documentation

- **Detailed Setup**: `PROJECT_SETUP.md`
- **Implementation Overview**: `IMPLEMENTATION_SUMMARY.md`  
- **Project Structure**: `PROJECT_SETUP.md` (Project Structure section)

---

## 💡 Tips

- ✅ Keep `npm run dev` running in one terminal while developing
- ✅ Use `php artisan tinker` for quick database queries
- ✅ Check `/storage/logs` if something breaks
- ✅ Use browser DevTools for frontend debugging
- ✅ WhatsApp links will redirect to WhatsApp on mobile

---

## 🎉 All Set!

Your JAAN Travels website is now running locally!

Next steps:
1. Customize company info in `config/jaan.php`
2. Update WhatsApp number
3. Add your own destinations and offers
4. Deploy to server

---

**Questions?** Check `PROJECT_SETUP.md` for detailed information.

**Version:** 1.0.0  
**Status:** ✅ Ready to Use
