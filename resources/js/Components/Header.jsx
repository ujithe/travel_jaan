import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Logo from '../Components/assets/logo.png';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/services', label: 'Services' },
        { href: '/special-offers', label: 'Offers' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-40 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img src={Logo} alt="Travel Jaan Logo" className="h-[150px] w-[150px]" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${url === link.href
                                        ? 'bg-blue-100 text-blue-900'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            href="tel:+94112345678"
                            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
                        >
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/94765933255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 space-y-2">
                            <a
                                href="tel:+94112345678"
                                className="block px-3 py-2 bg-blue-900 text-white rounded-md text-center"
                            >
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/94765933255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-3 py-2 bg-green-500 text-white rounded-md text-center"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
