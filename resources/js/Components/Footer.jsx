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
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:flex md:items-center md:justify-between">
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
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-semibold font-['Playfair_Display']">JAAN TRAVELS</h3>
                        <p className="mt-3 max-w-md text-sm text-slate-300">
                            Sri Lanka's cheapest air tickets with same-day booking via WhatsApp.
                        </p>
                        <div className="mt-4 text-sm text-slate-300">
                            <p>Colombo, Sri Lanka</p>
                            <p>Mon - Sat: 9AM - 6PM</p>
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
                            <p>+94 11 234 5678</p>
                            <p>+94 71 234 5678</p>
                            <p>info@jaantravels.lk</p>
                        </div>
                        <div className="mt-4 flex gap-3 text-sm">
                            <a href="#" className="text-slate-300 hover:text-amber-300">FB</a>
                            <a href="#" className="text-slate-300 hover:text-amber-300">IG</a>
                            <a href="#" className="text-slate-300 hover:text-amber-300">WA</a>
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
