import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function About() {
    return (
        <AppLayout title="About Us - JAAN Travels">
            <Head>
                <meta name="description" content="Learn about JAAN Travels - Sri Lanka's cheapest air ticket provider with same-day WhatsApp booking." />
            </Head>

            <section className="py-12 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">About JAAN Travels</h1>
                    <p className="text-xl text-gray-200">Sri Lanka's trusted airline ticket provider since 2014</p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
                            <p className="text-gray-700 mb-4">
                                To provide Sri Lankan travelers with the absolute cheapest air tickets in the market, with convenient same-day booking via WhatsApp.
                            </p>
                            <p className="text-gray-700">
                                We partner directly with airlines to offer fares that beat any price online. Our commitment is your savings.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
                            <p className="text-gray-700 mb-4">
                                To be the #1 trusted air ticket provider in Sri Lanka, known for honest pricing and exceptional customer service.
                            </p>
                            <p className="text-gray-700">
                                We believe every traveler deserves affordable tickets and deserves a smooth booking experience.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-lg mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Choose JAAN Travels?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-bold text-lg mb-2">💰 Cheapest Prices</h3>
                                <p className="text-gray-700">We match or beat any quoted price. Best price guarantee.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">⚡ Same-Day Booking</h3>
                                <p className="text-gray-700">Get your tickets confirmed same day via WhatsApp.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">✅ Trusted Service</h3>
                                <p className="text-gray-700">10+ years in business, 50,000+ happy customers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-900">10+</p>
                            <p className="text-gray-600">Years in Business</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-900">50K+</p>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-900">100+</p>
                            <p className="text-gray-600">Destinations</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl sm:text-4xl font-bold text-blue-900">IATA</p>
                            <p className="text-gray-600">Certified</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Airlines */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Partner Airlines</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {['Emirates', 'Qatar Airways', 'Sri Lankan', 'FlyDubai', 'Air Arabia', 'Oman Air', 'Kuwait Airways', 'Saudi Airlines'].map((airline) => (
                            <div key={airline} className="bg-white p-6 rounded-lg text-center shadow">
                                <p className="font-semibold text-gray-700">{airline}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </AppLayout>
    );
}
