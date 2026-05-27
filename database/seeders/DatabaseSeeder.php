<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Destination;
use App\Models\BlogPost;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\Visa;
use App\Models\FAQ;
use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create test admin user if not exists
        if (!User::where('email', 'admin@gmail.com')->exists()) {
            User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('Admin@123'),
                'is_admin' => true,
            ]);
        } else {
            User::where('email', 'admin@gmail.com')->update([
                'password' => Hash::make('Admin@123'),
                'is_admin' => true,
            ]);
        }

        // Seed Destinations
        $destinations = [
            // Middle East
            [
                'name' => 'Doha',
                'code' => 'DOH',
                'country' => 'Qatar',
                'region' => 'Middle East',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Doha (DOH) with Jaan Travels. We compare live airlines and routes to guarantee you the lowest airfares with instant booking and same-day ticket confirmation right over WhatsApp. Travel to Qatar stress-free!',
                'seo_title' => 'Cheap Flights to Doha from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Doha with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to doha, colombo to doha air ticket price, sri lanka to qatar flight ticket price, cheapest flights to doha, doha flight booking sri lanka, air tickets to qatar, jaan travels',
            ],
            [
                'name' => 'Dubai',
                'code' => 'DXB',
                'country' => 'UAE',
                'region' => 'Middle East',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Dubai (DXB) with Jaan Travels. We track and compare live routes across top airlines to secure the lowest islandwide airfares. Benefit from instant booking, completely hassle-free processing, and fast same-day ticket confirmations directly over WhatsApp.',
                'seo_title' => 'Cheap Flights to Dubai from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Dubai with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to dubai, colombo to dubai air ticket price, sri lanka to dubai flight ticket price, cheapest flights to uae, dubai flight booking sri lanka, air tickets to dxb, jaan travels',
            ],
            [
                'name' => 'Abu Dhabi',
                'code' => 'AUH',
                'country' => 'UAE',
                'region' => 'Middle East',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Abu Dhabi (AUH) with Jaan Travels. We check and compare live routes across all major airlines to guarantee you the lowest islandwide airfares. Experience fast WhatsApp booking and same-day ticket confirmation with zero hassle.',
                'seo_title' => 'Cheap Flights to Abu Dhabi from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Abu Dhabi with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to abu dhabi, colombo to abu dhabi flight ticket price, sri lanka to uae air ticket price, cheapest flights to abu dhabi, abu dhabi flight booking sri lanka, air tickets to auh, jaan travels',
            ],
            [
                'name' => 'Riyadh',
                'code' => 'RUH',
                'country' => 'Saudi Arabia',
                'region' => 'Middle East',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Riyadh (RUH) with Jaan Travels. We check and compare live networks across all top airlines to secure the lowest islandwide airfares for business and employment travel. Enjoy a seamless booking process and fast same-day ticket confirmations handled completely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Riyadh from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Riyadh with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to riyadh, colombo to riyadh air ticket price, sri lanka to saudi arabia flight ticket price, cheapest flights to riyadh ruh, riyadh flight booking sri lanka, air tickets to saudi arabia, jaan travels',
            ],
            [
                'name' => 'Jeddah',
                'code' => 'JED',
                'country' => 'Saudi Arabia',
                'region' => 'Middle East',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Jeddah (JED) with Jaan Travels. Whether traveling for Umrah, leisure, or business, we compare live networks across all top airlines to secure the lowest islandwide airfares. Enjoy a seamless booking process and fast same-day ticket confirmations handled completely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Jeddah from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Jeddah with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to jeddah, colombo to jeddah air ticket price, sri lanka to jeddah flight ticket price, cheapest flights to jeddah umrah, jeddah flight booking sri lanka, air tickets to saudi arabia, jaan travels',
            ],

            // Southeast Asia
            [
                'name' => 'Singapore',
                'code' => 'SIN',
                'country' => 'Singapore',
                'region' => 'Southeast Asia',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Singapore (SIN) with Jaan Travels. We look through live airline networks to lock in the lowest islandwide airfares for your journey. Book seamlessly without an office visit and get your tickets confirmed the same day via WhatsApp.',
                'seo_title' => 'Cheap Flights to Singapore from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Singapore with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to singapore, colombo to singapore flight ticket price, sri lanka to singapore air ticket price, cheapest flights to singapore, singapore flight booking sri lanka, air tickets to sin, jaan travels',
            ],
            [
                'name' => 'Kuala Lumpur',
                'code' => 'KUL',
                'country' => 'Malaysia',
                'region' => 'Southeast Asia',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Kuala Lumpur (KUL) with Jaan Travels. We check and compare live airline routes to secure the absolute lowest islandwide airfares. Benefit from instant booking, clear communication, and fast same-day ticket confirmations handled right over WhatsApp.',
                'seo_title' => 'Cheap Flights to Kuala Lumpur from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Kuala Lumpur with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to kuala lumpur, colombo to kuala lumpur flight ticket price, sri lanka to malaysia air ticket price, cheapest flights to malaysia, kuala lumpur flight booking sri lanka, air tickets to kul, jaan travels',
            ],
            [
                'name' => 'Bangkok',
                'code' => 'BKK',
                'country' => 'Thailand',
                'region' => 'Southeast Asia',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Bangkok (BKK) with Jaan Travels. We scan and compare live routes across multiple airlines to offer you the lowest islandwide airfares. Experience the easiest, fastest booking process with same-day flight confirmations via WhatsApp.',
                'seo_title' => 'Cheap Flights to Bangkok from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Bangkok with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to bangkok, colombo to bangkok flight ticket price, sri lanka to thailand air ticket price, cheapest flights to thailand, bangkok flight booking sri lanka, air tickets to bangkok, jaan travels',
            ],
            [
                'name' => 'Bali',
                'code' => 'DPS',
                'country' => 'Indonesia',
                'region' => 'Southeast Asia',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Bali (DPS) with Jaan Travels. We track and compare live routes across top airlines to guarantee you the lowest islandwide airfares for your tropical escape or honeymoon. Enjoy instant booking and fast same-day ticket confirmations handled completely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Bali from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Bali with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to bali, colombo to bali flight ticket price, sri lanka to bali air ticket price, cheapest flights to bali dps, bali flight booking sri lanka, air tickets to indonesia, jaan travels',
            ],
            [
                'name' => 'Ho Chi Minh City',
                'code' => 'SGN',
                'country' => 'Vietnam',
                'region' => 'Southeast Asia',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Ho Chi Minh City (SGN) with Jaan Travels. We track and compare live routes across top-rated airlines to guarantee you the absolute lowest islandwide airfares. Enjoy a seamless booking experience and fast same-day ticket confirmations directly over WhatsApp.',
                'seo_title' => 'Cheap Flights to Ho Chi Minh City from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Ho Chi Minh City with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking.',
                'seo_keywords' => 'cheap flights to ho chi minh city, colombo to vietnam flight ticket price, sri lanka to ho chi minh flight ticket price, cheapest flights to vietnam, ho chi minh flight booking sri lanka, air tickets to sgn, jaan travels',
            ],

            // Europe
            [
                'name' => 'London',
                'code' => 'LHR',
                'country' => 'United Kingdom',
                'region' => 'Europe',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to London (LHR) with Jaan Travels. We check and compare live routes across major airlines to guarantee you the lowest islandwide airfares. Benefit from instant booking, expert routing, and fast same-day ticket confirmations handled right over WhatsApp.',
                'seo_title' => 'Cheap Flights to London from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to London with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to london, colombo to london air ticket price, sri lanka to uk flight ticket price, cheapest flights to london heathrow, london flight booking sri lanka, air tickets to uk, jaan travels',
            ],
            [
                'name' => 'Paris',
                'code' => 'CDG',
                'country' => 'France',
                'region' => 'Europe',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Paris (CDG) with Jaan Travels. We check and compare live networks across all top airlines to secure the lowest islandwide airfares. Enjoy a seamless booking process and fast same-day ticket confirmations handled completely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Paris from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Paris with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to paris, colombo to paris air ticket price, sri lanka to france flight ticket price, cheapest flights to paris cdg, paris flight booking sri lanka, air tickets to europe, jaan travels',
            ],
            [
                'name' => 'Frankfurt',
                'code' => 'FRA',
                'country' => 'Germany',
                'region' => 'Europe',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Frankfurt (FRA) with Jaan Travels. We check and compare live networks across all top airlines to secure the lowest islandwide airfares. Enjoy a seamless booking process and fast same-day ticket confirmations handled completely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Frankfurt from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Frankfurt with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to frankfurt, colombo to frankfurt air ticket price, sri lanka to germany flight ticket price, cheapest flights to frankfurt fra, frankfurt flight booking sri lanka, air tickets to europe, jaan travels',
            ],

            // Oceania
            [
                'name' => 'Sydney',
                'code' => 'SYD',
                'country' => 'Australia',
                'region' => 'Oceania',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Sydney (SYD) with Jaan Travels. We check and compare live routes across major airlines to guarantee you the lowest islandwide airfares. Enjoy fast WhatsApp booking, zero hassle, and same-day ticket confirmation.',
                'seo_title' => 'Cheap Flights to Sydney from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Sydney with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to sydney, colombo to sydney flight price lkr, sri lanka to australia air ticket price, cheapest flights to australia, sydney flight booking sri lanka, air tickets to sydney, jaan travels',
            ],
            [
                'name' => 'Melbourne',
                'code' => 'MEL',
                'country' => 'Australia',
                'region' => 'Oceania',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Melbourne (MEL) with Jaan Travels. We check and compare live routes across major airlines to guarantee you the lowest islandwide airfares. Enjoy fast WhatsApp booking, zero hassle, and same-day ticket confirmation for students and families alike.',
                'seo_title' => 'Cheap Flights to Melbourne from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Melbourne with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to melbourne, colombo to melbourne flight price lkr, sri lanka to australia air ticket price, cheapest flights to australia, melbourne flight booking sri lanka, air tickets to melbourne, jaan travels',
            ],

            // South Asia
            [
                'name' => 'Male',
                'code' => 'MLE',
                'country' => 'Maldives',
                'region' => 'South Asia',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Malé (MLE) with Jaan Travels. We check and compare live airlines to guarantee you the lowest islandwide airfares to the Maldives. Enjoy super-fast WhatsApp booking, zero hassle, and same-day ticket confirmations for your tropical getaway.',
                'seo_title' => 'Cheap Flights to Male Maldives from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Malé with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to male, colombo to maldives flight ticket price, sri lanka to male air ticket price, cheapest flights to maldives, male flight booking sri lanka, air tickets to mle, jaan travels',
            ],
            [
                'name' => 'Mumbai',
                'code' => 'BOM',
                'country' => 'India',
                'region' => 'South Asia',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Mumbai (BOM) with Jaan Travels. We scan live airlines and routes to bring you the lowest islandwide airfares. Enjoy effortless instant booking and fast same-day ticket confirmation handled completely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Mumbai from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Mumbai with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to mumbai, colombo to mumbai flight ticket price, sri lanka to mumbai air ticket price, cheapest flights to india, mumbai flight booking sri lanka, air tickets to mumbai, jaan travels',
            ],
            [
                'name' => 'Delhi',
                'code' => 'DEL',
                'country' => 'India',
                'region' => 'South Asia',
                'is_featured' => true,
                'description' => 'Book the cheapest flights from Colombo to Delhi (DEL) with Jaan Travels. We compare live airline routes to secure the absolute lowest islandwide airfares for your journey. Enjoy instant booking and fast same-day ticket confirmation handled entirely over WhatsApp.',
                'seo_title' => 'Cheap Flights to Delhi from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Delhi with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to delhi, colombo to delhi flight ticket price, sri lanka to india air ticket price, cheapest flights to india, delhi flight booking sri lanka, air tickets to delhi, jaan travels',
            ],
            [
                'name' => 'Chennai',
                'code' => 'MAA',
                'country' => 'India',
                'region' => 'South Asia',
                'is_featured' => false,
                'description' => 'Book the cheapest flights from Colombo to Chennai (MAA) with Jaan Travels. As one of our highest-frequency, shortest routes, we scan live airlines daily to secure the absolute lowest islandwide airfares. Enjoy instant booking and fast same-day ticket confirmations handled right over WhatsApp.',
                'seo_title' => 'Cheap Flights to Chennai from Sri Lanka | Jaan Travels',
                'seo_description' => 'Find the cheapest air tickets from Colombo to Chennai with Jaan Travels. Lock in the lowest fares across live routes with fast WhatsApp booking and confirmation.',
                'seo_keywords' => 'cheap flights to chennai, colombo to chennai flight ticket price, sri lanka to chennai air ticket price, cheapest flights to india, chennai flight booking sri lanka, air tickets to maa, jaan travels',
            ],
        ];

        foreach ($destinations as $dest) {
            $slug = Str::slug($dest['name']);
            Destination::updateOrCreate(
                ['slug' => $slug],
                array_merge($dest, ['slug' => $slug])
            );
        }

        // Seed Visas
        $visas = [
            [
                'name' => 'Dubai',
                'options' => [
                    '30 Days Single - LKR 8,500',
                ],
                'seo_title' => 'Dubai Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Dubai tourist visa with Jaan Travels. Lock in the cheapest islandwide rate for a 30 Days Single entry visa at LKR 8,500 over fast WhatsApp booking.',
                'seo_keywords' => 'dubai visa, dubai visa from sri lanka, cheapest dubai visa, dubai tourist visa price, uae visa fee lkr, 30 days dubai visa cost, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Oman',
                'options' => [
                    '10 Days Visit - LKR 8,700',
                    '30 Days Visit - LKR 30,450',
                ],
                'seo_title' => 'Oman Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Oman tourist visa online with Jaan Travels. Get the cheapest islandwide rates on 10-day & 30-day visit visas with instant booking via WhatsApp.',
                'seo_keywords' => 'oman visa, oman visa from sri lanka, cheapest oman visa, oman tourist visa price, oman visit visa lkr, oman visa change, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'India',
                'options' => [
                    '30 Days Double - LKR 12,441',
                    '1 Year Multiple - LKR 13,137',
                    '1 Year Business (No Docs) - LKR 41,412',
                    '60 Days Triple Entry - LKR 24,621',
                ],
                'seo_title' => 'India Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Indian tourist visa online with Jaan Travels. Get the cheapest islandwide rates on 30-day, 1-year, and tourist e-visas via instant WhatsApp booking.',
                'seo_keywords' => 'india visa, india visa from sri lanka, cheapest india visa, indian tourist visa price, india visa lkr, indian visa fee for sri lankan, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Malaysia',
                'options' => [
                    '30 Days Single (With Docs) - LKR 13,137',
                    '30 Days Single (Without Docs) - LKR 34,636',
                    '6 Months Tourist Multiple - LKR 62,999',
                    '6 Months Business Multiple - LKR 72,395',
                ],
                'seo_title' => 'Malaysia Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Malaysia tourist eVisa online with Jaan Travels. Enjoy the cheapest islandwide rates on 30-day tourist visas with fast WhatsApp booking.',
                'seo_keywords' => 'malaysia visa, malaysia visa from sri lanka, cheapest malaysia visa, malaysia tourist evisa price, malaysia visa lkr, online visa booking sri lanka, malaysia visa change, jaan travels',
            ],
            [
                'name' => 'China',
                'options' => [
                    '14 Days Tourist - LKR 30,885 / 34,636',
                    'Express - LKR 44,022 / 50,345',
                    '30 Days Business - LKR 43,076 / 50,345',
                    '6 Months Multiple - LKR 66,033',
                    '1 Year Multiple - LKR 81,780',
                ],
                'seo_title' => 'China Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your China tourist & business visa with Jaan Travels. Get the cheapest islandwide rates on Single & Double entry visas via fast WhatsApp booking.',
                'seo_keywords' => 'china visa, china visa from sri lanka, cheapest china visa, china tourist visa price, china visa fee lkr, china business m visa, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Azerbaijan',
                'options' => [
                    '30 Days Single - LKR 15,660',
                ],
                'seo_title' => 'Azerbaijan Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Azerbaijan tourist eVisa with Jaan Travels. Get the cheapest islandwide rate for a 30 Days Single entry visa at LKR 15,660 with quick WhatsApp booking.',
                'seo_keywords' => 'azerbaijan visa, azerbaijan visa from sri lanka, cheapest azerbaijan visa, azerbaijan tourist evisa price, azerbaijan visa lkr, online visa booking sri lanka, baku visa fee, jaan travels',
            ],
            [
                'name' => 'Georgia',
                'options' => [
                    'With Package - LKR 75,429',
                    'Visa Only - LKR 96,396',
                ],
                'seo_title' => 'Georgia Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Georgia tourist visa online with Jaan Travels. Enjoy the cheapest islandwide rates for Visa Only or complete Visa Packages via fast WhatsApp booking.',
                'seo_keywords' => 'georgia visa, georgia visa from sri lanka, cheapest georgia visa, georgia tourist visa price, georgia visa package lkr, online visa booking sri lanka, tbilisi visa fee, jaan travels',
            ],
            [
                'name' => 'Indonesia',
                'options' => [
                    '60 Days Single - LKR 30,363',
                    '1 Year Multiple - LKR 83,946',
                    '1 Year Business (No Docs) - LKR 113,187',
                ],
                'seo_title' => 'Indonesia Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Indonesia tourist & business visa with Jaan Travels. Get the cheapest rates on 60-day single, 1-year multiple entry, and business visas over WhatsApp.',
                'seo_keywords' => 'indonesia visa, indonesia visa from sri lanka, cheapest indonesia visa, bali visa fee sri lanka, indonesia tourist visa price, 1 year multiple entry indonesia visa, indonesia business visa lkr, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Pakistan',
                'options' => [
                    '90 Days Multiple - LKR 12,093',
                ],
                'seo_title' => 'Pakistan Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Pakistan tourist visa with Jaan Travels. Get the cheapest islandwide rate for a 90 Days Multiple entry visa at LKR 12,093 with fast WhatsApp booking.',
                'seo_keywords' => 'pakistan visa, pakistan visa from sri lanka, cheapest pakistan visa, pakistan tourist visa price, pakistan visa fee lkr, 90 days multiple entry pakistan visa, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Cambodia',
                'options' => [
                    'Visa Fee - LKR 15,747',
                ],
                'seo_title' => 'Cambodia Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Cambodia tourist visa with Jaan Travels. Get the cheapest islandwide rate via fast WhatsApp booking.',
                'seo_keywords' => 'cambodia visa, cambodia visa from sri lanka, cheapest cambodia visa, cambodia tourist visa price, cambodia visa fee lkr, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Laos',
                'options' => [
                    'Visa Fee - LKR 25,665',
                ],
                'seo_title' => 'Laos Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Laos tourist visa with Jaan Travels. Get the cheapest islandwide rate via fast WhatsApp booking.',
                'seo_keywords' => 'laos visa, laos visa from sri lanka, cheapest laos visa, laos tourist visa price, laos visa fee lkr, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Uzbekistan',
                'options' => [
                    'Single - LKR 14,181',
                    'Double - LKR 19,401',
                    'Multiple - LKR 25,665',
                ],
                'seo_title' => 'Uzbekistan Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Uzbekistan tourist eVisa with Jaan Travels. Get the cheapest islandwide rates on Single, Double, and Multiple entry visas over WhatsApp.',
                'seo_keywords' => 'uzbekistan visa, uzbekistan visa from sri lanka, cheapest uzbekistan visa, uzbekistan tourist evisa price, uzbekistan visa fee lkr, single entry uzbekistan visa, online visa booking sri lanka, jaan travels',
            ],
            [
                'name' => 'Kenya',
                'options' => [
                    '90 Days Single - LKR 19,401',
                ],
                'seo_title' => 'Kenya Visa from Sri Lanka | Cheapest Rates & Quick Booking',
                'seo_description' => 'Apply for your Kenya tourist visa online with Jaan Travels. Lock in the cheapest islandwide rate for a 90 Days Single entry visa at LKR 19,401 over WhatsApp.',
                'seo_keywords' => 'kenya visa, kenya visa from sri lanka, cheapest kenya visa, kenya tourist eta price, kenya visa fee lkr, online visa booking sri lanka, kenya tourist visa cost, jaan travels',
            ],
        ];

        foreach ($visas as $visa) {
            $slug = Str::slug($visa['name']);
            Visa::updateOrCreate(
                ['slug' => $slug],
                array_merge($visa, ['slug' => $slug, 'is_active' => true])
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
            $slug = Str::slug($service['title']);
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
