import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Logo from '../Components/assets/logo.png';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/visas', label: 'Visa' },
        { href: '/services', label: 'Services' },
        { href: '/special-offers', label: 'Offers' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-20">
                <div className="flex w-full items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src={Logo}
                            alt="Travel Jaan Logo"
                            className="h-12 w-auto object-contain sm:h-14 md:h-32"
                        />
                    </Link>

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

                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://wa.me/94765933255"
                            className="px-4 py-2 rounded-full border border-white/30 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-green-500 hover:text-green-500"
                        >
                            Whatsapp Now
                        </a>
                    </div>

                    <button
                        className="md:hidden rounded-full border border-white/10 p-2 text-white/90 hover:border-white/20 hover:text-white"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
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
                    <nav id="mobile-navigation" className="md:hidden mt-3 rounded-2xl border border-white/10 bg-slate-950/98 p-4 shadow-lg">
                        <div className="space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
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
