import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <>
            {/* CTA Section */}
            <section className="relative overflow-hidden py-6 px-4 sm:px-6 lg:px-8 mt-8">
                {/* Background stars / grid layout matching Hero */}
                <div className="absolute inset-0 bg-slate-950" />
                <div 
                    className="absolute inset-0 opacity-40 select-none pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.18), transparent 75%), radial-gradient(circle at 15% 85%, rgba(251, 191, 36, 0.12), transparent 55%)',
                    }}
                />
                
                {/* Boarding Pass CTA Container */}
                <div className="relative max-w-4xl mx-auto rounded-3xl border border-white/10 bg-slate-900/40 p-4 sm:p-6 backdrop-blur shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden">
                    
                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    {/* Left/Right floating background glows */}
                    <div className="absolute -top-24 right-1/4 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
                    <div className="absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

                    <div className="flex flex-col md:flex-row items-stretch justify-between relative gap-6 md:gap-0 z-20">
                        {/* Main Boarding Pass Body (Left 70%) */}
                        <div className="md:w-[70%] space-y-2.5 md:pr-8 flex flex-col justify-center">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span className="text-[9px] font-mono tracking-[0.25em] text-amber-300 font-bold uppercase">BOARDING PASS</span>
                                <span className="text-[8px] font-mono tracking-wider text-slate-400">FLIGHT JAAN-2026</span>
                            </div>
                            
                            <div className="flex items-center gap-4 sm:gap-8">
                                <div>
                                    <span className="text-[9px] font-mono tracking-widest text-slate-500 block">FROM</span>
                                    <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">CMB</span>
                                    <span className="text-[11px] text-slate-400 block mt-0.5 font-semibold">Colombo, LK</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center relative">
                                    <div className="w-full border-t border-dashed border-white/20 relative" />
                                    <svg className="absolute w-4 h-4 text-amber-400 fill-current rotate-90" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l8 2.5z"/>
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <span className="text-[9px] font-mono tracking-widest text-slate-500 block">TO</span>
                                    <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">JAAN</span>
                                    <span className="text-[11px] text-slate-400 block mt-0.5 font-semibold">Worldwide</span>
                                </div>
                            </div>

                            <div className="pt-0.5">
                                <h2 className="text-lg sm:text-xl font-extrabold font-display text-white tracking-tight leading-tight">
                                    Ready to Book Your <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 bg-clip-text text-transparent">Cheapest Ticket?</span>
                                </h2>
                                <p className="mt-0.5 text-[11px] sm:text-xs text-slate-300 max-w-xl leading-relaxed">
                                    WhatsApp us now and get your flights and visas locked in today same day!
                                </p>
                            </div>
                        </div>

                        {/* Vertical Ticket Cutouts */}
                        <div className="hidden md:block absolute top-0 bottom-0 right-[30%] border-r border-dashed border-white/15 z-10" />
                        <div className="hidden md:block absolute -top-10 right-[calc(30%-10px)] w-5 h-5 bg-slate-950 rounded-full border border-white/10 z-10" />
                        <div className="hidden md:block absolute -bottom-10 right-[calc(30%-10px)] w-5 h-5 bg-slate-950 rounded-full border border-white/10 z-10" />

                        {/* Boarding Pass Stub (Right 30%) */}
                        <div className="md:w-[30%] md:pl-8 flex flex-col justify-between items-center text-center relative pt-2 md:pt-0">
                            <div className="w-full">
                                <span className="text-[8px] font-mono tracking-widest text-slate-500 block uppercase">GATE PASS</span>
                                <span className="text-[11px] font-mono font-bold text-white block mt-0.5">FASTCONFIRM</span>
                            </div>

                            <div className="my-2">
                                <a
                                    href="https://wa.me/94765933255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <svg className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.978 14.12 1.9 11.993 1.9c-5.439 0-9.865 4.37-9.87 9.8-.001 1.776.475 3.51 1.376 5.044L2.447 21.5l4.8-1.256zM17.487 14.39c-.27-.136-1.602-.79-1.852-.88-.25-.09-.432-.136-.613.136-.18.272-.7.88-.858 1.06-.158.182-.317.205-.587.07-1.3-.652-2.185-1.164-3.054-2.656-.23-.396.23-.367.658-1.22.072-.145.037-.272-.018-.382-.055-.11-.432-1.043-.593-1.43-.156-.379-.313-.328-.432-.334-.112-.006-.24-.006-.368-.006-.128 0-.337.048-.513.24-.176.191-.672.657-.672 1.601 0 .943.687 1.854.782 1.987.096.133 1.348 2.06 3.267 2.89.456.197.813.315 1.092.404.46.146.879.125 1.21.076.368-.055 1.602-.656 1.828-1.29.227-.633.227-1.177.16-1.29-.069-.112-.25-.205-.52-.34z"/>
                                    </svg>
                                    <span>WhatsApp Now</span>
                                </a>
                            </div>

                            {/* Stub Barcode */}
                            <div className="flex items-end justify-center gap-[2.5px] h-5 w-full opacity-35 hover:opacity-60 transition duration-300">
                                <div className="w-[1.5px] h-full bg-white"></div>
                                <div className="w-[3px] h-full bg-white"></div>
                                <div className="w-[1.5px] h-full bg-white"></div>
                                <div className="w-[4px] h-full bg-white"></div>
                                <div className="w-[1px] h-full bg-white"></div>
                                <div className="w-[2px] h-full bg-white"></div>
                                <div className="w-[5px] h-full bg-white"></div>
                                <div className="w-[1.5px] h-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section with starry grid bg */}
            <footer className="relative overflow-hidden bg-slate-950 text-white border-t border-white/10 pb-4">
                <div className="absolute inset-0 select-none pointer-events-none">
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: 'radial-gradient(800px circle at 15% 90%, rgba(56, 189, 248, 0.15), transparent 60%), radial-gradient(700px circle at 85% 10%, rgba(251, 191, 36, 0.1), transparent 55%)',
                        }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                            backgroundSize: '36px 36px',
                        }}
                    />
                </div>
                
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
                    <div className="grid gap-4 lg:grid-cols-4 border-b border-white/5 pb-5">
                        {/* Column 1: Branding and Address Info in modern ticket panel */}
                        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/30 p-4 backdrop-blur border-l-4 border-l-amber-500/70 space-y-2.5">
                            <div>
                                <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                                    <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">JAAN</span> TRAVELS
                                </h3>
                                <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
                                    Sri Lanka's cheapest air tickets with same-day booking via WhatsApp.
                                </p>
                            </div>
                            
                            <div className="space-y-1.5 text-[11px] text-slate-400 pt-2.5 border-t border-white/5 max-w-sm">
                                <div className="flex gap-2 items-start">
                                    <span className="text-amber-400 mt-0.5">📍</span>
                                    <p className="leading-relaxed">No.46, Husdon Road, Colombo 03, Sri Lanka</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-amber-400">⏰</span>
                                    <p>Mon - Fri: 9AM - 6PM</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className="text-amber-400">💬</span>
                                    <p>WhatsApp replies: 24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links in modern ticket panel */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-4 backdrop-blur border-l-4 border-l-emerald-500/70 hover:bg-slate-900/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-emerald-400">Quick Links</h4>
                            <ul className="mt-2 space-y-2 text-[11px] text-slate-400">
                                <li>
                                    <Link href="/destinations" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="text-emerald-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>Destinations</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="text-emerald-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="text-emerald-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="flex items-center gap-1 group hover:text-white transition duration-200">
                                        <span className="text-emerald-400 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">→</span>
                                        <span>FAQ</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Contact Info in modern ticket panel */}
                        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-4 backdrop-blur border-l-4 border-l-sky-500/70 hover:bg-slate-900/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sky-400">Contact</h4>
                                <div className="mt-2 space-y-1 text-[11px] text-slate-400">
                                    <p className="font-semibold text-white text-xs">+94 76 593 3255</p>
                                    <p className="text-slate-400 hover:text-white transition duration-200 cursor-pointer">info@jaantravels.lk</p>
                                </div>
                            </div>
                            
                            {/* Aligned, Styled Social Media Icons */}
                            <div className="mt-2.5 flex gap-2 text-sm">
                                <a 
                                    href="#" 
                                    aria-label="Facebook" 
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-[rgba(24,119,242,0.3)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M18 3h-3a4 4 0 00-4 4v3H8v4h3v7h4v-7h3l1-4h-4V7a1 1 0 011-1h2V3z" />
                                    </svg>
                                </a>

                                <a 
                                    href="#" 
                                    aria-label="Instagram" 
                                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(238,42,123,0.3)]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="3" y="3" width="18" height="18" rx="5" />
                                        <circle cx="12" cy="12" r="3" />
                                        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Row Card with Boarding Pass Ticket Cut style */}
                    <div className="mt-5 border border-white/10 bg-slate-900/30 rounded-2xl py-2.5 px-4 backdrop-blur relative overflow-hidden flex flex-col sm:flex-row justify-around items-center text-center gap-4">
                        {/* Background dashed ticket cuts for stats ticket */}
                        <div className="hidden sm:block absolute top-0 bottom-0 left-[33%] border-r border-dashed border-white/10" />
                        <div className="hidden sm:block absolute top-0 bottom-0 left-[66%] border-r border-dashed border-white/10" />
                        
                        <div className="relative group text-center flex-1">
                            <p className="text-xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">10+</p>
                            <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider font-semibold">Years of experience</p>
                        </div>
                        <div className="relative group text-center flex-1">
                            <p className="text-xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">50K+</p>
                            <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider font-semibold">Happy customers</p>
                        </div>
                        <div className="relative group text-center flex-1">
                            <p className="text-xl font-extrabold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">24/7</p>
                            <p className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider font-semibold">WhatsApp support</p>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
                        <p>&copy; 2026 JAAN Travels. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span className="hover:text-slate-300 transition duration-200 cursor-pointer">Privacy Policy</span>
                            <span>&bull;</span>
                            <span className="hover:text-slate-300 transition duration-200 cursor-pointer">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
