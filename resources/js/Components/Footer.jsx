import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-yellow-400">JAAN TRAVELS</h3>
                        <p className="text-gray-300 text-sm">
                            Sri Lanka's cheapest air tickets with same-day booking via WhatsApp.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><Link href="/destinations" className="hover:text-yellow-400">Destinations</Link></li>
                            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
                            <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
                            <li><Link href="/faq" className="hover:text-yellow-400">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-300 text-sm">
                            <p>📞 +94 11 234 5678</p>
                            <p>📱 +94 71 234 5678</p>
                            <p>📧 info@jaantravels.lk</p>
                            <p>📍 Colombo, Sri Lanka</p>
                        </div>
                    </div>

                    {/* Social & Hours */}
                    <div>
                        <h4 className="font-semibold mb-4">Hours</h4>
                        <p className="text-gray-300 text-sm mb-4">
                            Mon - Sat: 9AM - 6PM<br />
                            WhatsApp: 24/7
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-yellow-400">FB</a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400">IG</a>
                            <a href="#" className="text-gray-300 hover:text-yellow-400">WA</a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-blue-800 pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                        <div className="text-center">
                            <p className="text-yellow-400 font-bold">10+</p>
                            <p className="text-gray-300 text-xs">Years</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-400 font-bold">50K+</p>
                            <p className="text-gray-300 text-xs">Customers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-400 font-bold">100+</p>
                            <p className="text-gray-300 text-xs">Destinations</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-400 font-bold">IATA</p>
                            <p className="text-gray-300 text-xs">Certified</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-400 font-bold">SSL</p>
                            <p className="text-gray-300 text-xs">Secure</p>
                        </div>
                        <div className="text-center">
                            <p className="text-yellow-400 font-bold">24/7</p>
                            <p className="text-gray-300 text-xs">Support</p>
                        </div>
                    </div>

                    <div className="text-center text-gray-400 text-sm border-t border-blue-800 pt-8">
                        <p>&copy; 2026 JAAN Travels. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
