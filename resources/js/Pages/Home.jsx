import React, { useEffect, useRef, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppLayout from '@/Layouts/AppLayout';
import heroBg from '@/Components/assets/hero2.png';

// 3D Tilt Card Component with Spotlight Glow Effect
function TiltCard({ children, className = '', glowColor = 'rgba(255, 255, 255, 0.15)', number = '', activeBorderColor = 'rgba(255,255,255,0.2)', ticketMode = false }) {
    const cardRef = useRef(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
        setCoords({ x, y });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;

        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        setIsHovered(false);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur transition-all duration-300 ease-out cursor-pointer ${className}`}
            style={{
                transformStyle: 'preserve-3d',
                background: isHovered ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
                border: isHovered ? `1px solid ${activeBorderColor}` : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isHovered 
                    ? `0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15)`
                    : `0 10px 30px -15px rgba(0, 0, 0, 0.3), inset 0 1px 0.5px rgba(255, 255, 255, 0.05)`,
            }}
        >
            {/* Ticket Notches & Divider */}
            {ticketMode && (
                <>
                    {/* Dashed vertical line */}
                    <div className="absolute top-0 bottom-0 right-[25%] border-r border-dashed border-white/10 z-10" />
                    {/* Top semi-circle cutout */}
                    <div className="absolute -top-3 right-[calc(25%-12px)] w-6 h-6 bg-slate-950 rounded-full border border-white/15 z-10" />
                    {/* Bottom semi-circle cutout */}
                    <div className="absolute -bottom-3 right-[calc(25%-12px)] w-6 h-6 bg-slate-950 rounded-full border border-white/15 z-10" />
                </>
            )}

            {/* Background Number */}
            {number && (
                <div 
                    className="absolute right-3.5 bottom-1.5 text-7xl font-extrabold text-white/[0.02] select-none pointer-events-none font-display tracking-tighter transition-all duration-300"
                    style={{
                        transform: isHovered ? 'translateZ(10px) scale(1.05)' : 'translateZ(0px)',
                    }}
                >
                    {number}
                </div>
            )}
            
            {/* Dynamic Spotlight Glow */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
                }}
            />
            {/* Inner Content with TranslateZ depth */}
            <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }} className="h-full w-full">
                {children}
            </div>
        </div>
    );
}

export default function Home({ destinations, testimonials, services, visas }) {
    const pageRef = useRef(null)
    const heroRef = useRef(null)
    const destRef = useRef(null)
    const visaRef = useRef(null)
    const stepsRef = useRef(null)
    const testiRef = useRef(null)
    const ctaRef = useRef(null)

    // Refs for 3D Background Parallax layers
    const bgImgRef = useRef(null)
    const bgGlow1Ref = useRef(null)
    const bgGlow2Ref = useRef(null)
    const bgGridRef = useRef(null)

    const destinationStat = destinations?.length ? `${destinations.length}+ featured routes` : '100+ global routes'
    const visaList = Array.isArray(visas) ? visas : []

    // 3D Background Parallax Mouse Handlers
    const handleHeroMouseMove = (e) => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        const { clientX, clientY } = e
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2

        const moveX = (clientX - centerX) / centerX
        const moveY = (clientY - centerY) / centerY

        // Each layer shifts at a different speed to create true 3D depth perception
        if (bgImgRef.current) {
            bgImgRef.current.style.transform = `translate3d(${moveX * -12}px, ${moveY * -12}px, 0) scale(1.05)`
        }
        if (bgGlow1Ref.current) {
            bgGlow1Ref.current.style.transform = `translate3d(${moveX * 30}px, ${moveY * 30}px, 0)`
        }
        if (bgGlow2Ref.current) {
            bgGlow2Ref.current.style.transform = `translate3d(${moveX * -35}px, ${moveY * -35}px, 0)`
        }
        if (bgGridRef.current) {
            bgGridRef.current.style.transform = `translate3d(${moveX * 15}px, ${moveY * 15}px, 0)`
        }
    }

    const handleHeroMouseLeave = () => {
        if (bgImgRef.current) {
            bgImgRef.current.style.transform = 'translate3d(0px, 0px, 0) scale(1.05)'
        }
        if (bgGlow1Ref.current) {
            bgGlow1Ref.current.style.transform = 'translate3d(0px, 0px, 0)'
        }
        if (bgGlow2Ref.current) {
            bgGlow2Ref.current.style.transform = 'translate3d(0px, 0px, 0)'
        }
        if (bgGridRef.current) {
            bgGridRef.current.style.transform = 'translate3d(0px, 0px, 0)'
        }
    }

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            return undefined
        }

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const heroItems = heroRef.current?.querySelectorAll('.hero-anim')
            if (heroItems?.length) {
                gsap.from(heroItems, {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power3.out',
                })
            }

            const heroVisual = heroRef.current?.querySelector('.hero-visual')
            if (heroVisual) {
                gsap.to(heroVisual, {
                    y: 40,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }

            const revealStagger = (elements, options = {}) => {
                const items = gsap.utils.toArray(elements)
                if (!items.length) {
                    return
                }

                gsap.from(items, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out',
                    ...options,
                    scrollTrigger: {
                        trigger: items[0],
                        start: 'top 82%',
                        toggleActions: 'play none none reverse',
                    },
                })
            }

            const revealSingle = (element, options = {}) => {
                if (!element) {
                    return
                }

                gsap.from(element, {
                    y: 24,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    ...options,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 84%',
                        toggleActions: 'play none none reverse',
                    },
                })
            }


            revealStagger(destRef.current?.querySelectorAll('.destination-card'), { y: 26, stagger: 0.1 })
            revealStagger(visaRef.current?.querySelectorAll('.visa-card'), { y: 26, stagger: 0.1 })
            revealStagger(stepsRef.current?.querySelectorAll('.step-card'), { y: 22, stagger: 0.14 })
            revealStagger(testiRef.current?.querySelectorAll('.testimonial-card'), { y: 22, stagger: 0.14 })
            revealSingle(ctaRef.current, { y: 28 })
        }, pageRef)

        return () => ctx.revert()
    }, [])

    return (
        <AppLayout title="JAAN Travels - Cheapest Air Tickets Sri Lanka" overlapHero={true}>
            <Head>
                <meta
                    name="description"
                    content="Sri Lanka's cheapest air tickets guaranteed! Same-day booking via WhatsApp. Best prices on international flights from Colombo."
                />
                <meta
                    name="keywords"
                    content="cheapest air tickets Sri Lanka, cheap flights Colombo, best price air tickets"
                />
            </Head>

            <div ref={pageRef}>
                {/* Super Hero Section with Mouse Parallax Handlers */}
                <section 
                    ref={heroRef} 
                    className="relative overflow-hidden bg-slate-950 text-white"
                    onMouseMove={handleHeroMouseMove}
                    onMouseLeave={handleHeroMouseLeave}
                >
                    <div className="absolute inset-0 select-none pointer-events-none">
                        <div
                            ref={bgImgRef}
                            className="absolute inset-0 bg-cover bg-center scale(1.05)"
                            style={{ 
                                backgroundImage: `url(${heroBg})`,
                                transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                            }}
                        />
                        <div
                            className="absolute inset-0 opacity-70"
                            style={{
                                backgroundImage: 'radial-gradient(800px circle at 20% 20%, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(700px circle at 85% 10%, rgba(251, 191, 36, 0.2), transparent 55%), linear-gradient(180deg, rgba(2, 6, 23, 0.95), rgba(6, 11, 40, 0.98))',
                            }}
                        />
                        <div 
                            ref={bgGlow1Ref}
                            className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl"
                            style={{ transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}
                        />
                        <div 
                            ref={bgGlow2Ref}
                            className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
                            style={{ transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' }}
                        />
                        <div
                            ref={bgGridRef}
                            className="absolute inset-0 opacity-15"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                                backgroundSize: '36px 36px',
                                transition: 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
                            }}
                        />
                    </div>

                    <div className="relative min-h-[100svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24">
                        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
                            <div className="space-y-6">
                                <p className="hero-anim text-xs uppercase tracking-[0.35em] text-amber-300 font-semibold">
                                    JAAN TRAVELS
                                </p>
                                <h1 className="hero-anim font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
                                    The Cheapest Islandwide Air Tickets & Visa Services
                                </h1>
                                <p className="hero-anim text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                                    Get the lowest rates in Sri Lanka with the fastest booking process. No office visits required—lock in your tickets and tourist visa changes instantly over WhatsApp. We compare live routes to give you the guaranteed best price and handle all the paperwork while you stay stress-free.
                                </p>

                                <div className="hero-anim grid gap-4 grid-cols-2 pt-2">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                        <p className="text-xs uppercase tracking-wide text-slate-400">Routes Available</p>
                                        <p className="text-lg font-semibold text-white mt-1">{destinationStat}</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                        <p className="text-xs uppercase tracking-wide text-slate-400">Response Speed</p>
                                        <p className="text-lg font-semibold text-white mt-1">Instant Support</p>
                                    </div>
                                </div>
                            </div>                            {/* Right Column: 3D Tilting Key Benefits Cards (Boarding Pass Design) */}
                            <div className="hero-anim space-y-5 lg:space-y-6 flex flex-col justify-center">
                                <TiltCard 
                                    glowColor="rgba(251, 191, 36, 0.18)"
                                    activeBorderColor="rgba(251, 191, 36, 0.35)"
                                    number="01"
                                    ticketMode={true}
                                    className="lg:mr-8 border-l-4 border-l-amber-500/70 pl-6 pr-4 py-6"
                                >
                                    <div className="flex w-full items-stretch justify-between relative min-h-[92px]">
                                        {/* Main Ticket Info (Left 72%) */}
                                        <div className="w-[72%] flex gap-4 items-start pr-2">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/25 to-amber-500/5 text-amber-300 border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                                                <svg className="h-5.5 w-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-[8px] tracking-wider uppercase text-amber-300 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded mb-1.5 inline-block">
                                                    Guaranteed Lowest Rates
                                                </span>
                                                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                                                    Cheapest Islandwide Pricing
                                                </h3>
                                                <p className="mt-1 text-xs text-slate-300 leading-normal">
                                                    Unbeatable rates on air tickets and visa services across Sri Lanka.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Boarding Pass Stub (Right 28%) */}
                                        <div className="w-[28%] flex flex-col justify-between items-center pl-4 py-0.5 text-center relative z-20">
                                            <div>
                                                <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase block leading-none">DESTINATION</span>
                                                <span className="text-[10px] font-bold text-white block mt-0.5 leading-none">COLOMBO</span>
                                            </div>

                                            {/* Vertical Barcode Lines */}
                                            <div className="flex items-end justify-center gap-[2px] h-7 w-full opacity-35 group-hover:opacity-65 transition-all duration-300 my-1">
                                                <div className="w-[1.5px] h-full bg-white/70"></div>
                                                <div className="w-[3px] h-full bg-white/70"></div>
                                                <div className="w-[1px] h-full bg-white/70"></div>
                                                <div className="w-[4px] h-full bg-white/70"></div>
                                                <div className="w-[1.5px] h-full bg-white/70"></div>
                                                <div className="w-[2px] h-full bg-white/70"></div>
                                                <div className="w-[5px] h-full bg-white/70"></div>
                                                <div className="w-[1px] h-full bg-white/70"></div>
                                            </div>

                                            <div>
                                                <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase block leading-none">GATE / SEAT</span>
                                                <span className="text-[9.5px] font-mono font-bold text-amber-300 block mt-0.5 leading-none">LKR / A-01</span>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                                
                                <TiltCard 
                                    glowColor="rgba(52, 211, 153, 0.18)"
                                    activeBorderColor="rgba(52, 211, 153, 0.35)"
                                    number="02"
                                    ticketMode={true}
                                    className="lg:ml-4 lg:mr-4 border-l-4 border-l-emerald-500/70 pl-6 pr-4 py-6"
                                >
                                    <div className="flex w-full items-stretch justify-between relative min-h-[92px]">
                                        {/* Main Ticket Info (Left 72%) */}
                                        <div className="w-[72%] flex gap-4 items-start pr-2">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-emerald-500/5 text-emerald-300 border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                                                <svg className="h-5.5 w-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-[8px] tracking-wider uppercase text-emerald-300 font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded mb-1.5 inline-block">
                                                    Fast 2-Minute Booking
                                                </span>
                                                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                                                    Instant WhatsApp Booking
                                                </h3>
                                                <p className="mt-1 text-xs text-slate-300 leading-normal">
                                                    Drop us a message and book your entire trip in minutes.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Boarding Pass Stub (Right 28%) */}
                                        <div className="w-[28%] flex flex-col justify-between items-center pl-4 py-0.5 text-center relative z-20">
                                            <div>
                                                <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase block leading-none">SERVICE</span>
                                                <span className="text-[10px] font-bold text-white block mt-0.5 leading-none">WHATSAPP</span>
                                            </div>

                                            {/* Vertical Barcode Lines */}
                                            <div className="flex items-end justify-center gap-[2px] h-7 w-full opacity-35 group-hover:opacity-65 transition-all duration-300 my-1">
                                                <div className="w-[2px] h-full bg-white/70"></div>
                                                <div className="w-[1.5px] h-full bg-white/70"></div>
                                                <div className="w-[4px] h-full bg-white/70"></div>
                                                <div className="w-[1px] h-full bg-white/70"></div>
                                                <div className="w-[3px] h-full bg-white/70"></div>
                                                <div className="w-[1.5px] h-full bg-white/70"></div>
                                                <div className="w-[1px] h-full bg-white/70"></div>
                                                <div className="w-[5px] h-full bg-white/70"></div>
                                            </div>

                                            <div>
                                                <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase block leading-none">GATE / SEAT</span>
                                                <span className="text-[9.5px] font-mono font-bold text-emerald-300 block mt-0.5 leading-none">CHAT / W-02</span>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>

                                <TiltCard 
                                    glowColor="rgba(56, 189, 248, 0.18)"
                                    activeBorderColor="rgba(56, 189, 248, 0.35)"
                                    number="03"
                                    ticketMode={true}
                                    className="lg:ml-8 border-l-4 border-l-sky-500/70 pl-6 pr-4 py-6"
                                >
                                    <div className="flex w-full items-stretch justify-between relative min-h-[92px]">
                                        {/* Main Ticket Info (Left 72%) */}
                                        <div className="w-[72%] flex gap-4 items-start pr-2">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/25 to-sky-500/5 text-sky-300 border border-sky-400/20 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                                                <svg className="h-5.5 w-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <span className="text-[8px] tracking-wider uppercase text-sky-300 font-bold bg-sky-400/10 px-1.5 py-0.5 rounded mb-1.5 inline-block">
                                                    Same-Day Confirmations
                                                </span>
                                                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors duration-300">
                                                    Same-Day Flight Confirmations
                                                </h3>
                                                <p className="mt-1 text-xs text-slate-300 leading-normal">
                                                    Fast-tracked ticketing with zero delays.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Boarding Pass Stub (Right 28%) */}
                                        <div className="w-[28%] flex flex-col justify-between items-center pl-4 py-0.5 text-center relative z-20">
                                            <div>
                                                <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase block leading-none">SPEED</span>
                                                <span className="text-[10px] font-bold text-white block mt-0.5 leading-none">SAME-DAY</span>
                                            </div>

                                            {/* Vertical Barcode Lines */}
                                            <div className="flex items-end justify-center gap-[2px] h-7 w-full opacity-35 group-hover:opacity-65 transition-all duration-300 my-1">
                                                <div className="w-[1.5px] h-full bg-white/70"></div>
                                                <div className="w-[3px] h-full bg-white/70"></div>
                                                <div className="w-[2px] h-full bg-white/70"></div>
                                                <div className="w-[1px] h-full bg-white/70"></div>
                                                <div className="w-[4px] h-full bg-white/70"></div>
                                                <div className="w-[1.5px] h-full bg-white/70"></div>
                                                <div className="w-[3px] h-full bg-white/70"></div>
                                                <div className="w-[1px] h-full bg-white/70"></div>
                                            </div>

                                            <div>
                                                <span className="text-[7.5px] font-mono tracking-widest text-slate-500 uppercase block leading-none">GATE / SEAT</span>
                                                <span className="text-[9.5px] font-mono font-bold text-sky-300 block mt-0.5 leading-none">FAST / S-03</span>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </div>

                        </div>
                    </div>
                </section>



                {/* Destinations Preview */}
                {destinations.length > 0 && (
                    <section className="py-12 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
                            <div ref={destRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                {destinations.map((destination) => (
                                    <Link
                                        key={destination.id}
                                        href={route('destinations.show', destination.slug)}
                                        className="group"
                                    >
                                        <div className="destination-card card-hover overflow-hidden rounded-2xl border border-slate-100 bg-white h-full">
                                            <div className="relative h-28">
                                                {destination.image ? (
                                                    <img
                                                        src={destination.image}
                                                        alt={destination.name}
                                                        className="h-full w-full object-cover"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 via-white to-slate-100">
                                                        <span className="text-sm font-semibold text-slate-700">{destination.name}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                                        {destination.name}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-600">{destination.country}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link
                                    href={route('destinations.index')}
                                    className="inline-block bg-blue-900 text-white px-6 py-2 mt-5 rounded hover:bg-blue-800 transition"
                                >
                                    View All Destinations →
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Visa Preview */}
                {visaList.length > 0 && (
                    <section className="py-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center mb-8">Visa Assistance</h2>
                            <div ref={visaRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                {visaList.map((visa) => (
                                    <Link
                                        key={visa.slug}
                                        href={route('visas.show', visa.slug)}
                                        className="group"
                                    >
                                        <div className="visa-card card-hover overflow-hidden rounded-2xl border border-slate-100 bg-white h-full">
                                            <div className="relative h-28">
                                                {visa.image ? (
                                                    <img
                                                        src={visa.image}
                                                        alt={visa.name}
                                                        className="h-full w-full object-cover"
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-slate-100">
                                                        <span className="text-sm font-semibold text-slate-700">{visa.name}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">
                                                        {visa.name} Visa
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-600">Fast processing with WhatsApp updates</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link
                                    href={route('visas.index')}
                                    className="inline-block bg-emerald-600 text-white px-6 py-2 mt-5 rounded hover:bg-emerald-500 transition"
                                >
                                    View All Visas →
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* How It Works */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="step-card text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-900">1</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">WhatsApp Your Route</h3>
                                <p className="text-gray-600">Send us where you want to go on WhatsApp</p>
                            </div>
                            <div className="step-card text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-900">2</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Get Cheapest Price</h3>
                                <p className="text-gray-600">We find you the lowest fare available</p>
                            </div>
                            <div className="step-card text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-blue-900">3</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Ticket Same Day</h3>
                                <p className="text-gray-600">Get confirmed same day via WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                {testimonials.length > 0 && (
                    <section className="py-12 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
                            <div ref={testiRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="testimonial-card card-hover bg-white rounded-lg p-6 shadow">
                                        <div className="flex items-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400">★</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 mb-4 italic">"{testimonial.message}"</p>
                                        <div className="border-t pt-4">
                                            <p className="font-semibold">{testimonial.customer_name}</p>
                                            {testimonial.route && (
                                                <p className="text-sm text-gray-600">{testimonial.route}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}


            </div>
        </AppLayout>
    );
}
