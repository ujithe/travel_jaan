import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <AppLayout title="Contact Us - JAAN Travels">
            <Head>
                <meta name="description" content="Contact JAAN Travels for cheapest air tickets to Middle East, Asia, Europe & beyond. Call, WhatsApp or visit us in Colombo." />
            </Head>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Have questions about flights? Ready to book your next adventure? We're here to help you find the cheapest fares.
                    </p>
                </div>
            </section>

            {/* Contact Methods Cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {/* Phone Card */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Call Us</h3>
                            <p className="text-gray-600 text-sm mb-3">Mon-Sat: 9 AM - 6 PM</p>
                            <a href="tel:+94112345678" className="text-blue-600 font-bold hover:text-blue-800 break-words">
                                +94 11 234 5678
                            </a>
                        </div>

                        {/* Mobile Card */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">📱</div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Mobile</h3>
                            <p className="text-gray-600 text-sm mb-3">Direct contact</p>
                            <a href="tel:+94765933255" className="text-blue-600 font-bold hover:text-blue-800 break-words">
                                +94 76 593 3255
                            </a>
                        </div>

                        {/* WhatsApp Card */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border-2 border-green-400">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="text-lg font-bold text-green-600 mb-2">WhatsApp</h3>
                            <p className="text-gray-600 text-sm mb-3">Available 24/7</p>
                            <a href="https://wa.me/94765933255?text=Hi%20JAAN%20Travels" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:text-green-800 break-words">
                                +94 76 593 3255
                            </a>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <div className="text-4xl mb-4">📧</div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Email</h3>
                            <p className="text-gray-600 text-sm mb-3">We'll respond quickly</p>
                            <a href="mailto:info@jaantravels.lk" className="text-blue-600 font-bold hover:text-blue-800 break-all">
                                info@jaantravels.lk
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="+94 7X XXX XXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="Flight inquiry"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                                        placeholder="Tell us about your travel plans..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold py-3 rounded-lg hover:from-blue-800 hover:to-blue-600 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Office Info & Location */}
                        <div className="space-y-8">
                            {/* Office Details */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-blue-900 mb-6">Office Details</h3>
                                
                                <div className="space-y-5">
                                    <div>
                                        <p className="text-sm text-gray-600 font-semibold mb-1">📍 Address</p>
                                        <p className="text-gray-800 font-medium">123 Independence Avenue<br />Colombo 7, Sri Lanka</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600 font-semibold mb-1">🕒 Office Hours</p>
                                        <p className="text-gray-800 font-medium">
                                            Mon - Sat: 9:00 AM - 6:00 PM<br />
                                            <span className="text-red-600">Sunday: Closed</span><br />
                                            <span className="text-green-600">WhatsApp: 24/7</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick CTA */}
                            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white text-center">
                                <h3 className="font-bold text-lg mb-3">Quick Booking?</h3>
                                <p className="text-sm mb-4 text-green-50">Chat with us on WhatsApp for instant quotes</p>
                                <a
                                    href="https://wa.me/94765933255?text=Hi%20JAAN%20Travels%2C%20I%20want%20to%20book%20a%20flight"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full bg-white text-green-600 font-bold py-2 rounded hover:bg-green-50 transition"
                                >
                                    Start on WhatsApp
                                </a>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    <a href="https://facebook.com/jaantravels" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 text-white py-3 rounded text-center font-bold hover:bg-blue-700 transition">
                                        f
                                    </a>
                                    <a href="https://instagram.com/jaantravels" target="_blank" rel="noopener noreferrer" className="flex-1 bg-pink-600 text-white py-3 rounded text-center font-bold hover:bg-pink-700 transition">
                                        📷
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose JAAN Travels?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl mb-4">✈️</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Best Fares</h3>
                            <p className="text-gray-700">We guarantee the lowest prices on all international flights</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Booking</h3>
                            <p className="text-gray-700">Get confirmed tickets within minutes</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Routes</h3>
                            <p className="text-gray-700">Flights to 100+ destinations worldwide</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl mb-4">👥</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
                            <p className="text-gray-700">Personal assistance for every booking</p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
