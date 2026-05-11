import React, { useEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import gsap from 'gsap';
import AppLayout from '@/Layouts/AppLayout';

export default function Home({ destinations, specialOffers, testimonials, services }) {
    const heroRef = useRef(null)
    const offersRef = useRef(null)
    const destRef = useRef(null)
    const testiRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'power3.out' } })

        if (heroRef.current) {
            tl.from(heroRef.current.querySelector('h1'), { y: 40, opacity: 0 })
            tl.from(heroRef.current.querySelector('p'), { y: 20, opacity: 0 }, '-=0.4')
            tl.from(heroRef.current.querySelectorAll('.trust-badge'), { y: 10, opacity: 0, stagger: 0.08 }, '-=0.4')
            tl.from(heroRef.current.querySelectorAll('.cta-btn'), { scale: 0.98, opacity: 0, stagger: 0.08 }, '-=0.5')
        }

        if (offersRef.current) {
            gsap.from(offersRef.current.querySelectorAll('.offer-card'), { y: 30, opacity: 0, stagger: 0.12, duration: 0.7 })
        }

        if (destRef.current) {
            gsap.from(destRef.current.querySelectorAll('.destination-card'), { y: 30, opacity: 0, stagger: 0.09, duration: 0.7 })
        }

        if (testiRef.current) {
            gsap.from(testiRef.current.querySelectorAll('.testimonial-card'), { y: 20, opacity: 0, stagger: 0.12, duration: 0.7 })
        }
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

            {/* Hero Section */}
            <section ref={heroRef} className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Sri Lanka's Cheapest Air Tickets
                        </h1>
                        <p className="text-xl text-gray-200 mb-6">
                            ✈ LOWEST PRICE GUARANTEED + SAME-DAY BOOKING VIA WHATSAPP
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="trust-badge bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
                                Best Price Guarantee
                            </div>
                            <div className="trust-badge bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
                                Same-Day Booking
                            </div>
                            <div className="trust-badge bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold text-sm">
                                10+ Years Experience
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://wa.me/94712345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block cta-btn bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg"
                            >
                                📱 Book via WhatsApp Now
                            </a>
                            <a
                                href="tel:+94112345678"
                                className="inline-block cta-btn bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg"
                            >
                                📞 Call +94 11 234 5678
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offers Section */}
            {specialOffers.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-8">🎉 Today's Deals</h2>
                        <div ref={offersRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {specialOffers.map((offer) => (
                                <div key={offer.id} className="offer-card card-hover bg-red-50 border-2 border-red-200 rounded-lg p-6">
                                    <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{offer.route}</p>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold text-red-600">LKR {offer.price.toLocaleString()}</span>
                                        {offer.discount_percent && (
                                            <span className="ml-2 text-sm bg-red-600 text-white px-2 py-1 rounded">
                                                Save {offer.discount_percent}%
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 mb-4">
                                        Expires: {new Date(offer.expires_at).toLocaleDateString()}
                                    </p>
                                    <a
                                        href="https://wa.me/94712345678"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-green-500 text-white text-center py-2 rounded hover:bg-green-600 transition"
                                    >
                                        WhatsApp to Book
                                    </a>
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
                        <div ref={destRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {destinations.map((destination) => (
                                <Link
                                    key={destination.id}
                                    href={route('destinations.show', destination.slug)}
                                    className="group"
                                >
                                    <div className="destination-card card-hover bg-white rounded-lg p-4 h-full">
                                        <div className="text-3xl mb-2">{destination.flag_icon || '🌍'}</div>
                                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">{destination.name}</h3>
                                        <p className="text-sm text-gray-600">{destination.country}</p>
                                        <p className="mt-2 font-bold text-blue-600">
                                            From LKR {destination.starting_fare.toLocaleString()}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center">
                            <Link
                                href={route('destinations.index')}
                                className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-900">1</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">WhatsApp Your Route</h3>
                            <p className="text-gray-600">Send us where you want to go on WhatsApp</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-900">2</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Get Cheapest Price</h3>
                            <p className="text-gray-600">We find you the lowest fare available</p>
                        </div>
                        <div className="text-center">
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
                                                Saved LKR {testimonial.savings.toLocaleString()}
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Book Your Cheapest Ticket?</h2>
                    <p className="text-xl text-gray-200 mb-6">
                        WhatsApp us now and get your tickets confirmed same day!
                    </p>
                    <a
                        href="https://wa.me/94712345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
                    >
                        📱 Chat on WhatsApp
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}
