# JAAN Travels Website - Project Documentation

## Project Overview

JAAN Travels is a Laravel + Inertia + React web application for booking international air tickets. The system is designed to showcase the cheapest air fares with a focus on WhatsApp-based same-day booking.

### Tech Stack
- **Backend**: Laravel 11 (PHP Framework)
- **Frontend**: React 18 + Inertia.js (Server-side rendering)
- **Database**: MySQL/PostgreSQL
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

### Key Features
- ✈ Destination listings with starting fares
- 💰 Special offers and promotions (admin-editable)
- 💬 WhatsApp integration for bookings
- 📱 Mobile-first responsive design
- 📝 Blog system with SEO optimization
- ❓ FAQ management
- 👥 Testimonials system
- 🏢 Admin panel for content management
- 🔍 SEO-friendly URL structure

---

## Project Structure

### Backend Structure (Laravel)

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── PageController.php          # Frontend page rendering
│   │   └── Admin/
│   │       ├── DestinationController.php
│   │       ├── BlogPostController.php
│   │       ├── SpecialOfferController.php
│   │       ├── TestimonialController.php
│   │       ├── FAQController.php
│   │       └── ServiceController.php
│   └── Requests/                        # Form validation
├── Models/
│   ├── Destination.php
│   ├── SpecialOffer.php
│   ├── BlogPost.php
│   ├── Service.php
│   ├── Testimonial.php
│   ├── FAQ.php
│   └── Setting.php
└── Providers/

database/
├── migrations/
│   ├── 2026_05_11_120000_create_destinations_table.php
│   ├── 2026_05_11_120001_create_special_offers_table.php
│   ├── 2026_05_11_120002_create_blog_posts_table.php
│   ├── 2026_05_11_120003_create_testimonials_table.php
│   ├── 2026_05_11_120004_create_services_table.php
│   ├── 2026_05_11_120005_create_faqs_table.php
│   └── 2026_05_11_120006_create_settings_table.php
└── seeders/
    └── DatabaseSeeder.php              # Sample data

config/
└── jaan.php                            # Application configuration

routes/
└── web.php                             # All routes (public & admin)
```

### Frontend Structure (React)

```
resources/js/
├── Layouts/
│   └── AppLayout.jsx                   # Main layout wrapper
├── Pages/
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── SpecialOffers.jsx
│   └── Blog/
│       ├── Index.jsx
│       └── Show.jsx
└── Components/
    ├── Header.jsx                      # Navigation header
    ├── Footer.jsx                      # Site footer
    └── WhatsAppButton.jsx              # Floating WhatsApp button
```

---

## Database Schema

### Destinations Table
```sql
- id, name, slug, code, country, region
- description, starting_fare, flag_icon, image
- order, is_featured, timestamps
```

### Special Offers Table
```sql
- id, title, description, price
- route, discount_percent, expires_at
- image, is_active, order, timestamps
```

### Blog Posts Table
```sql
- id, title, slug, excerpt, content
- featured_image, author, published_at, is_published
- views, seo_title, seo_description, seo_keywords, timestamps
```

### Services Table
```sql
- id, title, slug, description, details
- icon, image, order, is_active, timestamps
```

### Testimonials Table
```sql
- id, customer_name, message, rating
- route, savings, image
- is_featured, is_approved, order, timestamps
```

### FAQs Table
```sql
- id, question, answer, category
- order, is_active, timestamps
```

### Settings Table
```sql
- id, key (unique), value, timestamps
```

---

## Routes

### Public Routes
- `GET /` - Homepage
- `GET /about` - About Us
- `GET /destinations` - Destinations List
- `GET /destinations/{slug}` - Destination Detail
- `GET /services` - Services List
- `GET /services/{slug}` - Service Detail
- `GET /special-offers` - Special Offers
- `GET /contact` - Contact Page
- `GET /faq` - FAQ Page
- `GET /blog` - Blog List
- `GET /blog/{slug}` - Blog Post

### Admin Routes (Protected by auth)
- `GET /admin/destinations` - Destinations Management
- `CRUD /admin/destinations` - Create, Read, Update, Delete Destinations
- `CRUD /admin/blog-posts` - Blog Management
- `CRUD /admin/special-offers` - Special Offers Management
- `CRUD /admin/testimonials` - Testimonials Management
- `CRUD /admin/faqs` - FAQ Management
- `CRUD /admin/services` - Services Management

---

## Setup Instructions

### 1. Installation
```bash
composer install
npm install
```

### 2. Environment Configuration
```bash
cp .env.example .env
php artisan key:generate
```

Update `.env` with:
- Database credentials
- WhatsApp number (in config/jaan.php)
- Any other environment variables

### 3. Database Setup
```bash
php artisan migrate
php artisan db:seed
```

### 4. Build Frontend
```bash
npm run dev          # Development
npm run build        # Production
```

### 5. Running the Application
```bash
# Local development server
php artisan serve

# Watch for frontend changes
npm run dev
```

### 6. Access the Application
- Website: `http://localhost:8000`
- Admin Login: Create user or use seeded credentials
- Admin Panel: `http://localhost:8000/admin/*`

---

## Admin Panel Features

### Content Management
- **Destinations**: Add, edit, delete travel destinations with fares
- **Special Offers**: Create time-limited promotional deals
- **Blog Posts**: Write and publish SEO-optimized articles
- **Testimonials**: Manage customer reviews and ratings
- **FAQs**: Create FAQ categories and answers
- **Services**: Define travel services offered

### Admin Routes
- POST/PATCH/DELETE operations require admin authentication
- Admin users are created via Tinker or seeders
- Role-based access control can be added via packages like Spatie

---

## SEO Features

### On-Page SEO
- Unique meta titles and descriptions per page
- Proper H1 → H2 → H3 heading hierarchy
- Alt text support for images
- Schema markup ready (LocalBusiness, FAQPage, BreadcrumbList)
- Internal linking structure
- Clean URL structure (no query strings)
- Mobile-first responsive design

### Technical SEO
- Google Search Console compatible
- Google Analytics 4 integration ready
- XML sitemap generation ready
- robots.txt configuration
- Canonical URLs
- Open Graph tags for social sharing
- Core Web Vitals optimized
- SSL/HTTPS ready

---

## Customization Guide

### Adding a New Destination
1. Create in database: `php artisan tinker`
   ```php
   Destination::create([...]);
   ```
2. Or use Admin Panel: `/admin/destinations`

### Customizing Company Info
Edit `config/jaan.php` with:
- Company name, phone, email
- WhatsApp number
- Office address and hours
- SEO keywords
- Business metrics

### Modifying the Homepage
Edit `resources/js/Pages/Home.jsx` to:
- Change hero section
- Add/remove sections
- Customize colors and layouts
- Update CTA buttons

### Adding New Pages
1. Create React component in `resources/js/Pages/`
2. Add controller method in `PageController.php`
3. Add route in `routes/web.php`
4. Link in navigation (Header.jsx)

### Styling
- Tailwind CSS used for all styling
- Colors: Navy Blue (#1e3a8a), Gold (#eab308), Green (#22c55e)
- Customize in component inline classes or `tailwind.config.js`

---

## Important Notes

### WhatsApp Integration
- Floating button on all pages
- Pre-filled message template
- Direct WhatsApp URL scheme: `https://wa.me/{number}?text={message}`
- Phone number format: Without '+' and spaces (e.g., 94765933255)

### Destination Landing Pages
- Each destination has URL like `/destinations/{slug}`
- SEO-optimized for route keywords
- Shows related destinations
- Call-to-action to WhatsApp book

### Mobile-First Design
- All components mobile-responsive
- Minimum tap target: 44px
- No horizontal scrolling
- Fast image loading with WebP format

---

## Deployment Checklist

- [ ] Update `.env` with production settings
- [ ] Run `php artisan migrate --force` on production
- [ ] Build frontend: `npm run build`
- [ ] Set up HTTPS/SSL certificate
- [ ] Configure WhatsApp number for production
- [ ] Update company info in `config/jaan.php`
- [ ] Set up Google Analytics
- [ ] Configure email settings
- [ ] Test all forms and external links
- [ ] Submit sitemap to Google Search Console
- [ ] Set up automated backups

---

## Troubleshooting

### Migrations not running
```bash
php artisan migrate:fresh --seed
```

### Frontend not updating
```bash
npm run dev
# or
npm run build
php artisan cache:clear
```

### Database errors
```bash
php artisan db:seed
# or specific seeder
php artisan db:seed --class=DatabaseSeeder
```

---

## Future Enhancements

- [ ] Payment gateway integration (Stripe, PayPal)
- [ ] Multi-language support
- [ ] Advanced search and filtering
- [ ] Email notifications
- [ ] SMS alerts for bookings
- [ ] Analytics dashboard
- [ ] API for third-party integrations
- [ ] Mobile app (React Native)
- [ ] Real-time price updates
- [ ] Customer account management

---

## Support & Contact

For questions or issues:
- Email: admin@jaantravels.lk
- WhatsApp: +94 71 234 5678
- Phone: +94 11 234 5678

---

**Last Updated**: May 2026
**Version**: 1.0.0
**Status**: Initial Release
