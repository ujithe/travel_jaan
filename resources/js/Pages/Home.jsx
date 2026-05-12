import React, { useEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppLayout from '@/Layouts/AppLayout';
import heroBg from '@/Components/assets/hero.png';

export default function Home({ destinations, specialOffers, testimonials, services }) {
    const pageRef = useRef(null)
    const heroRef = useRef(null)
    const offersRef = useRef(null)
    const destRef = useRef(null)
    const stepsRef = useRef(null)
    const testiRef = useRef(null)
    const ctaRef = useRef(null)

    const heroOffer = specialOffers?.[0]
    const heroDestination = destinations?.[0]
    const heroImage = heroOffer?.image || heroDestination?.image || null
    const heroRoute = heroOffer?.route || (heroDestination ? `${heroDestination.name}, ${heroDestination.country}` : 'Colombo to Dubai')
    const heroPrice = heroOffer?.price ?? heroDestination?.starting_fare ?? null
    const heroFareRowsSource = (specialOffers?.length ? specialOffers : destinations || []).slice(0, 3)
    const heroFareRows = heroFareRowsSource.map((item) => ({
        label: item.route || `${item.name}, ${item.country}`,
        price: item.price ?? item.starting_fare,
    }))
    const destinationStat = destinations?.length ? `${destinations.length}+ featured routes` : '100+ global routes'
    const offerStat = specialOffers?.length ? `${specialOffers.length} live deals` : 'Live deal alerts'

    const formatLkr = (value) => {
        if (value === null || value === undefined) {
            return 'Price on request'
        }

        const amount = Number(value)
        if (Number.isNaN(amount)) {
            return `LKR ${value}`
        }

        return `LKR ${amount.toLocaleString()}`
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

            revealStagger(offersRef.current?.querySelectorAll('.offer-card'))
            revealStagger(destRef.current?.querySelectorAll('.destination-card'), { y: 26, stagger: 0.1 })
            revealStagger(stepsRef.current?.querySelectorAll('.step-card'), { y: 22, stagger: 0.14 })
            revealStagger(testiRef.current?.querySelectorAll('.testimonial-card'), { y: 22, stagger: 0.14 })
            revealSingle(ctaRef.current, { y: 28 })
        }, pageRef)

        return () => ctx.revert()
    }, [])

    return (
        <AppLayout title="JAAN Travels - Cheapest Air Tickets Sri Lanka">
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
                {/* Super Hero Section */}
                <section ref={heroRef} className="relative overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${heroBg})` }}
                        />
                        <div
                            className="absolute inset-0 opacity-70"
                            style={{
                                backgroundImage: 'radial-gradient(800px circle at 20% 20%, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(700px circle at 85% 10%, rgba(251, 191, 36, 0.2), transparent 55%), linear-gradient(180deg, rgba(2, 6, 23, 0.95), rgba(6, 11, 40, 0.98))',
                            }}
                        />
                        <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-15"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                                backgroundSize: '36px 36px',
                            }}
                        />
                    </div>

                    <div className="relative min-h-[100svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
                        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="space-y-6">
                                <p className="hero-anim text-xs uppercase tracking-[0.35em] text-amber-300">
                                    JAAN TRAVELS
                                </p>
                                <h1 className="hero-anim font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                                    Cheapest air tickets, confirmed the same day.
                                </h1>
                                <p className="hero-anim text-lg text-slate-200 max-w-xl">
                                    Lock in the lowest fare with instant WhatsApp booking. We compare live routes and
                                    handle the confirmation so you can travel stress-free.
                                </p>

                                <div className="hero-anim flex flex-wrap gap-3">
                                    <span className="trust-badge rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100">
                                        Best price match
                                    </span>
                                    <span className="trust-badge rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100">
                                        Same-day confirmations
                                    </span>
                                    <span className="trust-badge rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100">
                                        10+ years of fares
                                    </span>
                                </div>

                                {/* <div className="hero-anim flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://wa.me/94765933255"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center cta-btn bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-300"
                                    >
                                        Book via WhatsApp
                                    </a>
                                    <a
                                        href="tel:+94765933255"
                                        className="inline-flex items-center justify-center cta-btn bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100"
                                    >
                                        Call +94 76 593 3255
                                    </a>
                                </div> */}

                                <div className="hero-anim grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-wide text-slate-300">Live deals</p>
                                        <p className="text-lg font-semibold text-white">{offerStat}</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-wide text-slate-300">Routes</p>
                                        <p className="text-lg font-semibold text-white">{destinationStat}</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-xs uppercase tracking-wide text-slate-300">Speed</p>
                                        <p className="text-lg font-semibold text-white">Same-day ticketing</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="hero-anim hero-visual relative">
                                <div className="absolute -top-6 -left-6 h-20 w-20 rounded-3xl border border-white/15" />
                                <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
                                    <div className="overflow-hidden rounded-2xl bg-white text-slate-900">
                                        <div className="relative h-44">
                                            {heroImage ? (
                                                <img
                                                    src={heroImage}
                                                    alt="Featured route"
                                                    className="h-full w-full object-cover"
                                                    loading="eager"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-100 via-white to-amber-100">
                                                    <span className="text-sm font-semibold text-slate-700">Featured route</span>
                                                </div>
                                            )}
                                            <div className="absolute left-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                                                {formatLkr(heroPrice)}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-xs uppercase tracking-wide text-slate-500">Featured route</p>
                                            <p className="text-lg font-semibold text-slate-900">{heroRoute}</p>
                                            <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                                                <span>Same-day confirmation</span>
                                                <span className="font-semibold text-blue-700">WhatsApp now</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid gap-3">
                                        {heroFareRows.map((row, index) => (
                                            <div
                                                key={`${row.label}-${index}`}
                                                className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 text-sm text-slate-100"
                                            >
                                                <span>{row.label}</span>
                                                <span className="font-semibold text-amber-200">
                                                    {formatLkr(row.price)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* Special Offers Section */}
                {specialOffers.length > 0 && (
                    <section className="py-12 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-center mb-8">Today's Deals</h2>
                            <div ref={offersRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {specialOffers.map((offer) => (
                                    <div
                                        key={offer.id}
                                        className="offer-card card-hover overflow-hidden rounded-2xl border border-red-100 bg-white shadow-sm"
                                    >
                                        <div className="relative h-40">
                                            {offer.image ? (
                                                <img
                                                    src={offer.image}
                                                    alt={offer.title}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-100 via-white to-amber-100">
                                                    <span className="text-sm font-semibold text-red-700">{offer.route}</span>
                                                </div>
                                            )}
                                            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-700">
                                                {formatLkr(offer.price)}
                                            </div>
                                            {offer.discount_percent && (
                                                <div className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                                                    Save {offer.discount_percent}%
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <p className="text-xs uppercase tracking-wide text-red-500 mb-2">Limited deal</p>
                                            <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{offer.route}</p>
                                            <p className="text-xs text-gray-500 mb-4">
                                                Expires: {new Date(offer.expires_at).toLocaleDateString()}
                                            </p>
                                            <a
                                                href="https://wa.me/94765933255"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition"
                                            >
                                                WhatsApp to Book
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

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
                                                <div className="absolute left-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700">
                                                    From {formatLkr(destination.starting_fare)}
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-2xl">{destination.flag_icon || '🌍'}</span>
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
                                            {testimonial.savings && (
                                                <p className="text-sm text-green-600 font-semibold">
                                                    Saved {formatLkr(testimonial.savings)}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="bg-blue-900 text-white py-12">
                    <div ref={ctaRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Cheapest Ticket?</h2>
                        <p className="text-xl text-gray-200 mb-6">
                            WhatsApp us now and get your tickets confirmed same day!
                        </p>
                        <a
                            href="https://wa.me/94765933255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
