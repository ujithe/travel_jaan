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
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className='px-8'>
                <div className="flex justify-between items-center h-16 md:h-20 w-[100%]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src={Logo}
                            alt="Travel Jaan Logo"
                            className="h-[150px] w-[150px] md:h-[150px] md:w-[150px] object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-xs uppercase tracking-[0.22em] transition-colors ${url === link.href
                                    ? 'text-amber-300'
                                    : 'text-slate-200 hover:text-amber-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:+94112345678"
                            className="px-4 py-2 rounded-full border border-white/30 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-amber-200 hover:text-amber-200"
                        >
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/94765933255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-amber-300 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200"
                        >
                            WhatsApp
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white/90 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
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
                    <nav className="md:hidden mt-4 rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-lg">
                        <div className="space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block text-xs uppercase tracking-[0.2em] transition ${url === link.href
                                        ? 'text-amber-300'
                                        : 'text-slate-200 hover:text-amber-200'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-4 space-y-3">
                            <a
                                href="tel:+94112345678"
                                className="block px-4 py-2 rounded-full border border-white/30 text-xs font-semibold uppercase tracking-[0.2em] text-center text-white"
                            >
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/94765933255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 rounded-full bg-amber-300 text-xs font-semibold uppercase tracking-[0.2em] text-center text-slate-900"
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
