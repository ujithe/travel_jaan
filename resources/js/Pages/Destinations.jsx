import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Destinations({ destinations }) {
    return (
        <AppLayout title="Destinations - JAAN Travels">
            <Head>
                <meta name="description" content="Browse all destinations available for booking with JAAN Travels - the cheapest air tickets from Sri Lanka." />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-8">Our Destinations</h1>

                    {Object.entries(destinations).map(([region, regionDestinations]) => (
                        <div key={region} className="mb-12">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-yellow-400">
                                {region}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {regionDestinations.map((destination) => (
                                    <Link
                                        key={destination.id}
                                        href={route('destinations.show', destination.slug)}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-lg p-6 hover:shadow-lg transition h-full">
                                            <div className="text-5xl mb-3">{destination.flag_icon || '🌍'}</div>
                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-1">
                                                {destination.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3">{destination.country}</p>
                                            <div className="pt-3 border-t">
                                                <p className="text-sm text-gray-500">From</p>
                                                <p className="text-xl font-bold text-blue-600">
                                                    LKR {destination.starting_fare.toLocaleString()}
                                                </p>
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
                        href="https://wa.me/94712345678"
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
