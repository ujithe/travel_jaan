import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Contact() {
    return (
        <AppLayout title="Contact Us - JAAN Travels">
            <Head>
                <meta name="description" content="Contact JAAN Travels for cheapest air tickets. Call or WhatsApp us now!" />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contact JAAN Travels</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="bg-white rounded-lg p-8 shadow">
                            <h2 className="text-2xl font-bold mb-8 text-blue-900">Get In Touch</h2>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">📞 Primary Phone</h3>
                                    <a href="tel:+94112345678" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800 break-words">
                                        +94 11 234 5678
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">📱 Mobile</h3>
                                    <a href="tel:+94765933255" className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-800 break-words">
                                        +94 76 593 3255
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">💬 WhatsApp</h3>
                                    <a href="https://wa.me/94765933255" target="_blank" rel="noopener noreferrer" className="text-xl sm:text-2xl font-bold text-green-600 hover:text-green-800 break-words">
                                        +94 76 593 3255
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">📧 Email</h3>
                                    <a href="mailto:info@jaantravels.lk" className="text-lg text-blue-600 hover:text-blue-800">
                                        info@jaantravels.lk
                                    </a>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">📍 Office Location</h3>
                                    <p className="text-gray-700">
                                        123 Independence Avenue<br />
                                        Colombo 7, Sri Lanka
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">🕒 Office Hours</h3>
                                    <p className="text-gray-700">
                                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                                        Sunday: Closed<br />
                                        <span className="font-semibold">WhatsApp: Available 24/7</span>
                                    </p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="border-t pt-6">
                                <h3 className="font-bold mb-4">Follow Us</h3>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700">Facebook</a>
                                    <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded text-center hover:bg-pink-700">Instagram</a>
                                </div>
                            </div>
                        </div>

                        {/* Map / Additional Info */}
                        <div className="bg-blue-50 rounded-lg p-8">
                            <h2 className="text-2xl font-bold mb-6 text-blue-900">Why Contact Us?</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="text-2xl">✈</span>
                                    <div>
                                        <h4 className="font-bold">Cheapest Fares</h4>
                                        <p className="text-gray-700">We guarantee the lowest prices on international flights</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-2xl">⚡</span>
                                    <div>
                                        <h4 className="font-bold">Same-Day Booking</h4>
                                        <p className="text-gray-700">Get your tickets confirmed and ready to go same day</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-2xl">💬</span>
                                    <div>
                                        <h4 className="font-bold">Easy WhatsApp Booking</h4>
                                        <p className="text-gray-700">Just send us your route and travel dates on WhatsApp</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-2xl">👥</span>
                                    <div>
                                        <h4 className="font-bold">Personal Support</h4>
                                        <p className="text-gray-700">Our team is here to help with any travel arrangements</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Quick Book */}
                            <div className="mt-8 bg-green-500 text-white p-6 rounded-lg text-center">
                                <h3 className="font-bold text-lg mb-4">Book Now on WhatsApp!</h3>
                                <a href="https://wa.me/94765933255" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-green-600 px-6 py-2 rounded font-bold hover:bg-gray-100">
                                    Start Conversation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
