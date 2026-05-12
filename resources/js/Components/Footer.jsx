import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-slate-950 text-white">
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.14),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_45%)]"
                aria-hidden="true"
            />
            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Fast Quotes</p>
                        <p className="mt-2 text-lg font-semibold font-['Playfair_Display']">
                            Get same-day fares with a quick WhatsApp message.
                        </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm md:mt-0">
                        <a
                            href="https://wa.me/94712345678"
                            className="rounded-md bg-amber-400 px-4 py-2 font-semibold text-slate-900 hover:bg-amber-300"
                        >
                            WhatsApp Quote
                        </a>
                        <Link
                            href="/destinations"
                            className="rounded-md border border-white/20 px-4 py-2 font-semibold text-white hover:border-amber-400 hover:text-amber-300"
                        >
                            View Destinations
                        </Link>
                    </div>
                </div> */}

                <div className="mt-12 grid gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold font-['Playfair_Display']">JAAN TRAVELS</h3>
                        <p className="mt-3 max-w-md text-sm text-slate-300">
                            Sri Lanka's cheapest air tickets with same-day booking via WhatsApp.
                        </p>
                        <div className="mt-4 text-sm text-slate-300">
                            <p>No.46, Husdon Road, Colombo 03, Sri Lanka</p>
                            <p>Mon - Fri: 9AM - 6PM</p>
                            <p>WhatsApp replies: 24/7</p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                            <li>
                                <Link href="/destinations" className="hover:text-amber-300">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-amber-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-amber-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-amber-300">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
                        <div className="mt-4 space-y-2 text-sm text-slate-300">
                            <p>+94 76 593 3255</p>
                            <p>info@jaantravels.lk</p>
                        </div>
                        <div className="mt-4 flex gap-3 text-sm">
                            <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-amber-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M18 3h-3a4 4 0 00-4 4v3H8v4h3v7h4v-7h3l1-4h-4V7a1 1 0 011-1h2V3z" />
                                </svg>
                            </a>

                            <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-amber-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="3" />
                                    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                            <a href="#" aria-label="WhatsApp" className="text-slate-300 hover:text-amber-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M8.2 10.2c.6-.7 1.5-1.1 2.5-1.1.3 0 .6 0 .9.1.3.1.5.3.6.6l.5 1.2c.1.3 0 .6-.2.8l-1 1c-.2.2-.5.4-.8.3-.6-.1-1.2-.4-1.7-.8-.5-.4-.9-.9-1.3-1.4-.4-.5-.7-1.1-.8-1.7-.1-.3.1-.6.3-.8l1.2-.5c.3-.1.5 0 .7.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-center sm:grid-cols-3">
                    <div>
                        <p className="text-lg font-semibold text-amber-300">10+</p>
                        <p className="text-xs text-slate-400">Years of experience</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-amber-300">50K+</p>
                        <p className="text-xs text-slate-400">Happy customers</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-amber-300">24/7</p>
                        <p className="text-xs text-slate-400">WhatsApp support</p>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-slate-400">
                    <p>&copy; 2026 JAAN Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
