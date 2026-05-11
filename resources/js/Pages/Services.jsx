import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Services({ services }) {
    return (
        <AppLayout title="Services - JAAN Travels">
            <Head>
                <meta name="description" content="JAAN Travels services: international ticketing, group bookings, student fares, Umrah packages, and more." />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-8">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                                <p className="text-gray-700 mb-4">{service.description}</p>
                                {service.details && (
                                    <p className="text-gray-600 text-sm mb-6">{service.details}</p>
                                )}
                                <a
                                    href="https://wa.me/94712345678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-600 font-semibold hover:text-blue-800"
                                >
                                    Learn More →
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Section */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">✈ International Air Ticketing</h3>
                                <p className="text-gray-700">
                                    We offer tickets to over 100 destinations worldwide at the best prices. Whether you're booking a one-way ticket or round-trip, we have you covered.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">💬 Same-Day WhatsApp Booking</h3>
                                <p className="text-gray-700">
                                    Our most popular service! Send us your travel details on WhatsApp and get confirmed tickets within hours.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">👥 Group Bookings</h3>
                                <p className="text-gray-700">
                                    Traveling with a group? We offer special group rates and personalized service for corporate and family travel.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">🎓 Student Fares</h3>
                                <p className="text-gray-700">
                                    Valid student ID gets you additional discounts on already-low fares. Perfect for student travelers!
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">🕌 Umrah & Hajj</h3>
                                <p className="text-gray-700">
                                    We specialize in affordable Umrah and Hajj packages with convenient payment options and group discounts.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-8 rounded-lg">
                                <h3 className="text-xl font-bold mb-4">💼 Corporate Travel</h3>
                                <p className="text-gray-700">
                                    Business travel made easy. We handle bulk bookings and provide invoicing for corporate accounts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Book Your Service Today</h2>
                    <p className="text-lg text-gray-200 mb-6">Contact us on WhatsApp or phone for any service inquiry</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a
                            href="https://wa.me/94712345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition"
                        >
                            WhatsApp Now
                        </a>
                        <a
                            href="tel:+94112345678"
                            className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded transition"
                        >
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
