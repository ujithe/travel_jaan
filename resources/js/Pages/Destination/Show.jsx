import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function DestinationShow({ destination, relatedDestinations }) {
    return (
        <AppLayout title={`Flights to ${destination.name} - JAAN Travels`}>
            <Head>
                <meta
                    name="description"
                    content={`Get a same-day flight quote from Colombo to ${destination.name}. Chat with JAAN Travels on WhatsApp to confirm your booking.`}
                />
            </Head>

            <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-16">
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.25), transparent 35%), radial-gradient(circle at 85% 0%, rgba(251, 191, 36, 0.2), transparent 35%), linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.96))',
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <div>
                            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                                WhatsApp First Booking
                            </p>
                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                                Flights to {destination.name}
                            </h1>
                            <p className="mt-3 text-base text-slate-200 sm:text-lg">
                                {destination.country} · {destination.region}
                            </p>
                            <p className="mt-6 max-w-2xl text-sm text-slate-200 sm:text-base">
                                Tell us your travel date and passenger count on WhatsApp. Our team checks live inventory and sends you the best available options the same day.
                            </p>

                            {/* <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="https://wa.me/94765933255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600"
                                >
                                    Start WhatsApp Quote
                                </a>
                                <a
                                    href="tel:+94765933255"
                                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-white/60"
                                >
                                    Call Support
                                </a>
                            </div> */}
                        </div>

                        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:p-6">
                            <h2 className="text-xl font-semibold">What You Get</h2>
                            <ul className="mt-4 space-y-3 text-sm text-slate-200">
                                <li>Live fare check by our ticketing team</li>
                                <li>Same-day booking confirmation</li>
                                <li>Personal travel assistance over WhatsApp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
                            {destination.description ? (
                                <p className="text-gray-700 mb-6">{destination.description}</p>
                            ) : (
                                <p className="text-gray-700 mb-6">
                                    Book your cheapest flights to {destination.name} from Colombo with JAAN Travels. We offer competitive fares and same-day WhatsApp booking for maximum convenience.
                                </p>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">Airport Code</p>
                                    <p className="text-2xl font-bold text-slate-900">{destination.code}</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">Country</p>
                                    <p className="text-xl font-bold text-slate-900">{destination.country}</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">Region</p>
                                    <p className="text-xl font-bold text-slate-900">{destination.region}</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                    <p className="text-xs uppercase tracking-wide text-slate-500">Support</p>
                                    <p className="text-xl font-bold text-slate-900">24/7 WhatsApp</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 md:sticky md:top-24">
                            <h3 className="mb-2 text-2xl font-bold text-slate-900">Get Your Quote</h3>
                            <p className="mb-4 text-sm text-slate-600">
                                Send route, travel date, and passenger count. We will reply with available flight options.
                            </p>
                            <div className="mb-5 rounded-xl bg-white p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">Fast Process</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li>1. Share your travel details</li>
                                    <li>2. Receive verified flight options</li>
                                    <li>3. Confirm instantly on WhatsApp</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <a
                                    href="https://wa.me/94765933255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full rounded-lg bg-emerald-500 py-3 text-center font-bold text-white transition hover:bg-emerald-600"
                                >
                                    Ask on WhatsApp
                                </a>
                                {/* <a
                                    href="tel:+94112345678"
                                    className="block w-full rounded-lg bg-slate-900 py-3 text-center font-bold text-white transition hover:bg-slate-700"
                                >
                                    Call +94 76 593 3255
                                </a> */}
                            </div>

                            <div className="mt-6 rounded-xl bg-white p-4 text-center">
                                <p className="mb-1 font-bold text-slate-900">Trusted JAAN Team</p>
                                <p className="text-sm text-slate-600">Fast response and same-day confirmations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Book {destination.name} with JAAN Travels?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                            <div className="mb-3 text-4xl">🕒</div>
                            <h3 className="font-bold mb-2">Quick Replies</h3>
                            <p className="text-sm text-gray-600">Ticketing support on WhatsApp without delays</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-bold mb-2">Same-Day</h3>
                            <p className="text-sm text-gray-600">Booking confirmations within hours</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                            <div className="text-4xl mb-3">💬</div>
                            <h3 className="font-bold mb-2">Simple Process</h3>
                            <p className="text-sm text-gray-600">Send details once and get curated options</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl text-center shadow-sm">
                            <div className="text-4xl mb-3">✅</div>
                            <h3 className="font-bold mb-2">Trusted</h3>
                            <p className="text-sm text-gray-600">Experienced travel advisors from Sri Lanka</p>
                        </div>
                    </div>
                </div>
            </section>

            {relatedDestinations.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8">More Destinations in {destination.region}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedDestinations.map((dest) => (
                                <Link
                                    key={dest.id}
                                    href={route('destinations.show', dest.slug)}
                                    className="group"
                                >
                                    <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition group-hover:shadow-lg">
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600">{dest.name}</h4>
                                        <p className="mb-3 text-sm text-gray-600">{dest.country}</p>
                                        <p className="text-sm font-semibold text-slate-800">View Route</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="bg-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ticket to {destination.name}?</h2>
                    <p className="text-lg text-gray-200 mb-6">Get your flight options and confirm the best one directly on WhatsApp.</p>
                    <a
                        href="https://wa.me/94765933255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
                    >
                        Chat on WhatsApp Now
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}
