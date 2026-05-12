import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Destinations({ destinations }) {
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

    return (
        <AppLayout title="Destinations - JAAN Travels">
            <Head>
                <meta name="description" content="Browse all destinations available for booking with JAAN Travels - the cheapest air tickets from Sri Lanka." />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-8">Our Destinations</h1>

                    {Object.entries(destinations).map(([region, regionDestinations]) => (
                        <div key={region} className="mb-12">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-yellow-400">
                                {region}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {regionDestinations.map((destination) => (
                                    <Link
                                        key={destination.id}
                                        href={route('destinations.show', destination.slug)}
                                        className="group"
                                    >
                                        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition h-full">
                                            <div className="relative h-32">
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
                                                {/* <div className="absolute left-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-700">
                                                    From {formatLkr(destination.starting_fare)}
                                                </div> */}
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-2xl">{destination.flag_icon || '🌍'}</span>
                                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600">
                                                        {destination.name}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-gray-600">{destination.country}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Don't see your destination?</h2>
                    <p className="mb-6">We can book tickets to almost anywhere in the world!</p>
                    <a
                        href="https://wa.me/94765933255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
                    >
                        WhatsApp Us
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}
