<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Destination;
use App\Models\SpecialOffer;
use App\Models\BlogPost;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\FAQ;
use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test admin user if not exists
        if (!User::where('email', 'admin@jaantravels.lk')->exists()) {
            User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@jaantravels.lk',
            ]);
        }

        // Seed Destinations
        $destinations = [
            // Middle East
            ['name' => 'Dubai', 'code' => 'DXB', 'country' => 'United Arab Emirates', 'region' => 'Middle East', 'starting_fare' => 65000, 'flag_icon' => '🇦🇪', 'is_featured' => true],
            ['name' => 'Abu Dhabi', 'code' => 'AUH', 'country' => 'United Arab Emirates', 'region' => 'Middle East', 'starting_fare' => 68000, 'flag_icon' => '🇦🇪'],
            ['name' => 'Doha', 'code' => 'DOH', 'country' => 'Qatar', 'region' => 'Middle East', 'starting_fare' => 72000, 'flag_icon' => '🇶🇦', 'is_featured' => true],
            ['name' => 'Riyadh', 'code' => 'RUH', 'country' => 'Saudi Arabia', 'region' => 'Middle East', 'starting_fare' => 75000, 'flag_icon' => '🇸🇦'],
            ['name' => 'Jeddah', 'code' => 'JED', 'country' => 'Saudi Arabia', 'region' => 'Middle East', 'starting_fare' => 78000, 'flag_icon' => '🇸🇦'],
            ['name' => 'Kuwait', 'code' => 'KWI', 'country' => 'Kuwait', 'region' => 'Middle East', 'starting_fare' => 80000, 'flag_icon' => '🇰🇼'],
            ['name' => 'Muscat', 'code' => 'MCT', 'country' => 'Oman', 'region' => 'Middle East', 'starting_fare' => 65000, 'flag_icon' => '🇴🇲'],
            ['name' => 'Bahrain', 'code' => 'BAH', 'country' => 'Bahrain', 'region' => 'Middle East', 'starting_fare' => 72000, 'flag_icon' => '🇧🇭'],

            // Southeast Asia
            ['name' => 'Singapore', 'code' => 'SIN', 'country' => 'Singapore', 'region' => 'Southeast Asia', 'starting_fare' => 45000, 'flag_icon' => '🇸🇬', 'is_featured' => true],
            ['name' => 'Kuala Lumpur', 'code' => 'KUL', 'country' => 'Malaysia', 'region' => 'Southeast Asia', 'starting_fare' => 42000, 'flag_icon' => '🇲🇾'],
            ['name' => 'Bangkok', 'code' => 'BKK', 'country' => 'Thailand', 'region' => 'Southeast Asia', 'starting_fare' => 48000, 'flag_icon' => '🇹🇭'],
            ['name' => 'Male', 'code' => 'MLE', 'country' => 'Maldives', 'region' => 'Southeast Asia', 'starting_fare' => 35000, 'flag_icon' => '🇲🇻'],

            // Europe
            ['name' => 'London', 'code' => 'LHR', 'country' => 'United Kingdom', 'region' => 'Europe', 'starting_fare' => 95000, 'flag_icon' => '🇬🇧', 'is_featured' => true],
            ['name' => 'Paris', 'code' => 'CDG', 'country' => 'France', 'region' => 'Europe', 'starting_fare' => 98000, 'flag_icon' => '🇫🇷'],
            ['name' => 'Amsterdam', 'code' => 'AMS', 'country' => 'Netherlands', 'region' => 'Europe', 'starting_fare' => 92000, 'flag_icon' => '🇳🇱'],

            // Australia
            ['name' => 'Sydney', 'code' => 'SYD', 'country' => 'Australia', 'region' => 'Oceania', 'starting_fare' => 120000, 'flag_icon' => '🇦🇺', 'is_featured' => true],
            ['name' => 'Melbourne', 'code' => 'MEL', 'country' => 'Australia', 'region' => 'Oceania', 'starting_fare' => 125000, 'flag_icon' => '🇦🇺'],

            // South Asia
            ['name' => 'Mumbai', 'code' => 'BOM', 'country' => 'India', 'region' => 'South Asia', 'starting_fare' => 35000, 'flag_icon' => '🇮🇳'],
            ['name' => 'Delhi', 'code' => 'DEL', 'country' => 'India', 'region' => 'South Asia', 'starting_fare' => 38000, 'flag_icon' => '🇮🇳'],
        ];

        foreach ($destinations as $dest) {
            $slug = \Str::slug($dest['name']);
            Destination::updateOrCreate(
                ['slug' => $slug],
                array_merge($dest, ['slug' => $slug])
            );
        }

        // Seed Special Offers
        $offers = [
            ['title' => 'Dubai Flash Sale', 'description' => 'Limited time offer for Dubai flights', 'price' => 59000, 'route' => 'Colombo to Dubai', 'discount_percent' => 10, 'expires_at' => now()->addDays(7), 'is_active' => true],
            ['title' => 'Singapore Special', 'description' => 'Get the cheapest fares to Singapore', 'price' => 39000, 'route' => 'Colombo to Singapore', 'discount_percent' => 15, 'expires_at' => now()->addDays(14), 'is_active' => true],
            ['title' => 'UK Adventure', 'description' => 'Fly to London at the best price', 'price' => 85000, 'route' => 'Colombo to London', 'discount_percent' => 12, 'expires_at' => now()->addDays(10), 'is_active' => true],
        ];

        foreach ($offers as $offer) {
            SpecialOffer::updateOrCreate(
                ['title' => $offer['title']],
                $offer
            );
        }

        // Seed Services
        $services = [
            ['title' => 'International Air Ticketing', 'description' => 'Book flights to over 100 destinations worldwide', 'details' => 'We offer the best prices on international flights to all major destinations.', 'icon' => '✈'],
            ['title' => 'Same-Day Booking via WhatsApp', 'description' => 'Get your tickets confirmed same day', 'details' => 'Just send us your travel details on WhatsApp and get confirmed tickets.', 'icon' => '💬'],
            ['title' => 'Group Bookings', 'description' => 'Special rates for group travel', 'details' => 'Traveling with a group? We offer excellent group discounts.', 'icon' => '👥'],
            ['title' => 'Student Fares', 'description' => 'Discounted rates for students', 'details' => 'Valid student ID gets you special discounted fares.', 'icon' => '🎓'],
            ['title' => 'Umrah & Hajj Packages', 'description' => 'Affordable pilgrim travel packages', 'details' => 'We specialize in affordable Umrah and Hajj packages.', 'icon' => '🕌'],
            ['title' => 'Corporate Travel', 'description' => 'Business travel solutions', 'details' => 'Tailored corporate travel packages for your business needs.', 'icon' => '💼'],
        ];

        foreach ($services as $service) {
            $slug = \Str::slug($service['title']);
            Service::updateOrCreate(
                ['slug' => $slug],
                array_merge($service, ['slug' => $slug, 'is_active' => true])
            );
        }

        // Seed Testimonials
        $testimonials = [
            ['customer_name' => 'Mohamed Yusuf', 'message' => 'Best price I found online! Saved over 15,000 LKR on my ticket to Dubai. Highly recommended!', 'rating' => 5, 'route' => 'Colombo to Dubai', 'savings' => 15000, 'is_featured' => true, 'is_approved' => true],
            ['customer_name' => 'Priya Weerasekera', 'message' => 'Super fast booking process on WhatsApp. Got my ticket within 2 hours!', 'rating' => 5, 'route' => 'Colombo to London', 'savings' => 12000, 'is_featured' => true, 'is_approved' => true],
            ['customer_name' => 'Nimal De Silva', 'message' => 'Great customer service. They really care about getting you the best price.', 'rating' => 5, 'route' => 'Colombo to Singapore', 'savings' => 8000, 'is_featured' => true, 'is_approved' => true],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::updateOrCreate(
                [
                    'customer_name' => $testimonial['customer_name'],
                    'route' => $testimonial['route'],
                ],
                $testimonial
            );
        }

        // Seed FAQs
        $faqs = [
            ['question' => 'How does WhatsApp booking work?', 'answer' => 'Simply send us a message on WhatsApp with your travel details (origin, destination, and travel date). We\'ll find the cheapest fares and send you options. Once you confirm, we process your booking and send you the tickets.', 'category' => 'booking', 'is_active' => true],
            ['question' => 'How long does booking take?', 'answer' => 'Most bookings are confirmed within 2-4 hours. For urgent bookings, we can process them within 1 hour.', 'category' => 'booking', 'is_active' => true],
            ['question' => 'What payment methods do you accept?', 'answer' => 'We accept bank transfers, debit cards, credit cards, and other digital payment methods. Payment details will be shared once you confirm your booking.', 'category' => 'payment', 'is_active' => true],
            ['question' => 'Are your prices really the cheapest?', 'answer' => 'Yes! We have partnerships with airlines that allow us to offer the best fares. If you find a cheaper price elsewhere, we\'ll match it or beat it.', 'category' => 'pricing', 'is_active' => true],
            ['question' => 'Do you offer group discounts?', 'answer' => 'Absolutely! For groups of 10 or more passengers, we offer special group rates. Contact us for a custom quote.', 'category' => 'pricing', 'is_active' => true],
            ['question' => 'Can I change my booking after confirmation?', 'answer' => 'In most cases, yes. Airlines allow changes with applicable fees. We\'ll help you make any necessary modifications.', 'category' => 'booking', 'is_active' => true],
        ];

        foreach ($faqs as $faq) {
            FAQ::updateOrCreate(
                ['question' => $faq['question']],
                $faq
            );
        }

        // Seed Blog Posts
        $blogPosts = [
            [
                'title' => 'Cheapest Airlines Flying from Sri Lanka to Dubai 2026',
                'slug' => 'cheapest-airlines-dubai-2026',
                'excerpt' => 'Discover which airlines offer the cheapest fares from Colombo to Dubai in 2026.',
                'content' => 'Lorem ipsum dolor sit amet...',
                'author' => 'JAAN Travels',
                'is_published' => true,
                'published_at' => now()->subDays(5),
                'seo_title' => 'Cheapest Airlines Sri Lanka to Dubai 2026 - JAAN Travels',
                'seo_description' => 'Find the cheapest flights from Colombo to Dubai with JAAN Travels.',
            ],
            [
                'title' => 'How to Get the Cheapest Air Tickets from Sri Lanka',
                'slug' => 'cheapest-air-tickets-sri-lanka',
                'excerpt' => 'Tips and tricks to always get the best prices on international flights.',
                'content' => 'Lorem ipsum dolor sit amet...',
                'author' => 'JAAN Travels',
                'is_published' => true,
                'published_at' => now()->subDays(10),
                'seo_title' => 'How to Get Cheapest Air Tickets from Sri Lanka',
                'seo_description' => 'Learn insider tips to book the cheapest flights from Sri Lanka.',
            ],
            [
                'title' => 'Colombo to London: Cheapest Flight Guide 2026',
                'slug' => 'colombo-london-cheapest-2026',
                'excerpt' => 'Complete guide to finding the cheapest flights from Colombo to London.',
                'content' => 'Lorem ipsum dolor sit amet...',
                'author' => 'JAAN Travels',
                'is_published' => true,
                'published_at' => now()->subDays(15),
                'seo_title' => 'Colombo to London Cheapest Flights 2026',
                'seo_description' => 'Find cheap flights from Colombo to London with JAAN Travels.',
            ],
        ];

        foreach ($blogPosts as $post) {
            BlogPost::updateOrCreate(
                ['slug' => $post['slug']],
                $post
            );
        }

        // Seed Settings
        Setting::updateOrCreate(['key' => 'company_name'], ['value' => 'JAAN Travels']);
        Setting::updateOrCreate(['key' => 'company_email'], ['value' => 'info@jaantravels.lk']);
        Setting::updateOrCreate(['key' => 'company_phone'], ['value' => '+94 11 234 5678']);
        Setting::updateOrCreate(['key' => 'company_whatsapp'], ['value' => '+94 71 234 5678']);
        Setting::updateOrCreate(['key' => 'company_address'], ['value' => '123 Independence Avenue, Colombo 7, Sri Lanka']);
        Setting::updateOrCreate(['key' => 'tagline'], ['value' => 'Sri Lanka\'s Cheapest Air Tickets - Guaranteed Best Price']);
    }
}
