import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <>
            {/* CTA Section */}
            <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 mt-16">
                <div className="absolute inset-0 bg-slate-950" />
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15), transparent 70%), radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1), transparent 50%)',
                    }}
                />
                
                <div className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-slate-900/40 p-8 sm:p-12 text-center backdrop-blur shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                    <div className="absolute -top-24 right-1/4 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
                    <div className="absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
                    
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                        Ready to Book Your Cheapest Ticket?
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
                        WhatsApp us now and get your tickets confirmed same day!
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://wa.me/94765933255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-950/30 hover:bg-emerald-600 transition active:scale-95 duration-150"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.978 14.12 1.9 11.993 1.9c-5.439 0-9.865 4.37-9.87 9.8-.001 1.776.475 3.51 1.376 5.044L2.447 21.5l4.8-1.256zM17.487 14.39c-.27-.136-1.602-.79-1.852-.88-.25-.09-.432-.136-.613.136-.18.272-.7.88-.858 1.06-.158.182-.317.205-.587.07-1.3-.652-2.185-1.164-3.054-2.656-.23-.396.23-.367.658-1.22.072-.145.037-.272-.018-.382-.055-.11-.432-1.043-.593-1.43-.156-.379-.313-.328-.432-.334-.112-.006-.24-.006-.368-.006-.128 0-.337.048-.513.24-.176.191-.672.657-.672 1.601 0 .943.687 1.854.782 1.987.096.133 1.348 2.06 3.267 2.89.456.197.813.315 1.092.404.46.146.879.125 1.21.076.368-.055 1.602-.656 1.828-1.29.227-.633.227-1.177.16-1.29-.069-.112-.25-.205-.52-.34z"/>
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="relative overflow-hidden bg-slate-950 text-white">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.05),transparent_45%)]"
                    aria-hidden="true"
                />
                
                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-4 border-b border-white/5 pb-12">
                        {/* Column 1: Branding and Address Info */}
                        <div className="lg:col-span-2 space-y-4">
                            <h3 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                                <span className="text-amber-400">JAAN</span> TRAVELS
                            </h3>
                            <p className="max-w-md text-sm text-slate-400 leading-relaxed">
                                Sri Lanka's cheapest air tickets with same-day booking via WhatsApp.
                            </p>
                            <div className="space-y-2 text-sm text-slate-400 pt-2 border-t border-white/5 max-w-xs">
                                <div className="flex gap-2.5 items-start">
                                    <span className="text-amber-300">📍</span>
                                    <p>No.46, Husdon Road, Colombo 03, Sri Lanka</p>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <span className="text-amber-300">⏰</span>
                                    <p>Mon - Fri: 9AM - 6PM</p>
                                </div>
                                <div className="flex gap-2.5 items-center">
                                    <span className="text-amber-300">💬</span>
                                    <p>WhatsApp replies: 24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur hover:bg-white/[0.04] hover:border-white/10 transition duration-300">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-300">Quick Links</h4>
                            <ul className="mt-4 space-y-3 text-sm text-slate-400">
                                <li>
                                    <Link href="/destinations" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>Destinations</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>FAQ</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur hover:bg-white/[0.04] hover:border-white/10 transition duration-300">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-amber-300">Contact</h4>
                            <div className="mt-4 space-y-2 text-sm text-slate-400">
                                <p className="font-semibold text-white">+94 76 593 3255</p>
                                <p className="text-slate-400 hover:text-white transition duration-200">info@jaantravels.lk</p>
                            </div>
                            <div className="mt-6 flex gap-3 text-sm">
                                <a 
                                    href="#" 
                                    aria-label="Facebook" 
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M18 3h-3a4 4 0 00-4 4v3H8v4h3v7h4v-7h3l1-4h-4V7a1 1 0 011-1h2V3z" />
                                    </svg>
                                </a>

                                <a 
                                    href="#" 
                                    aria-label="Instagram" 
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="3" y="3" width="18" height="18" rx="5" />
                                        <circle cx="12" cy="12" r="3" />
                                        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>

                                <a 
                                    href="#" 
                                    aria-label="WhatsApp" 
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.978 14.12 1.9 11.993 1.9c-5.439 0-9.865 4.37-9.87 9.8-.001 1.776.475 3.51 1.376 5.044L2.447 21.5l4.8-1.256zM17.487 14.39c-.27-.136-1.602-.79-1.852-.88-.25-.09-.432-.136-.613.136-.18.272-.7.88-.858 1.06-.158.182-.317.205-.587.07-1.3-.652-2.185-1.164-3.054-2.656-.23-.396.23-.367.658-1.22.072-.145.037-.272-.018-.382-.055-.11-.432-1.043-.593-1.43-.156-.379-.313-.328-.432-.334-.112-.006-.24-.006-.368-.006-.128 0-.337.048-.513.24-.176.191-.672.657-.672 1.601 0 .943.687 1.854.782 1.987.096.133 1.348 2.06 3.267 2.89.456.197.813.315 1.092.404.46.146.879.125 1.21.076.368-.055 1.602-.656 1.828-1.29.227-.633.227-1.177.16-1.29-.069-.112-.25-.205-.52-.34z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Row */}
                    <div className="mt-12 grid gap-6 grid-cols-3 text-center border-b border-white/5 pb-10">
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">10+</p>
                            <p className="text-xs sm:text-sm text-slate-400 mt-1">Years of experience</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">50K+</p>
                            <p className="text-xs sm:text-sm text-slate-400 mt-1">Happy customers</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">24/7</p>
                            <p className="text-xs sm:text-sm text-slate-400 mt-1">WhatsApp support</p>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>&copy; 2026 JAAN Travels. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
                            <span>&bull;</span>
                            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
