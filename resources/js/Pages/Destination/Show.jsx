import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function DestinationShow({ destination, relatedDestinations }) {
    return (
        <AppLayout title={`Flights to ${destination.name} - JAAN Travels`}>
            <Head>
                <meta
                    name="description"
                    content={`Cheap flights from Colombo to ${destination.name}. Starting from LKR ${destination.starting_fare.toLocaleString()}. Book now on WhatsApp!`}
                />
            </Head>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-6xl mb-4 block">{destination.flag_icon || '🌍'}</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Flights to {destination.name}
                        </h1>
                        <p className="text-xl text-gray-200 mb-6">
                            {destination.country} • {destination.region}
                        </p>
                        <div className="bg-yellow-500 text-blue-900 inline-block px-6 py-3 rounded-lg font-bold text-lg mb-6">
                            From LKR {destination.starting_fare.toLocaleString()}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Info */}
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
                            {destination.description ? (
                                <p className="text-gray-700 mb-6">{destination.description}</p>
                            ) : (
                                <p className="text-gray-700 mb-6">
                                    Book your cheapest flights to {destination.name} from Colombo with JAAN Travels. We offer competitive fares and same-day WhatsApp booking for maximum convenience.
                                </p>
                            )}

                            {/* Info Cards */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-600 text-sm">Airport Code</p>
                                    <p className="text-2xl font-bold text-blue-900">{destination.code}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-600 text-sm">Country</p>
                                    <p className="text-xl font-bold text-blue-900">{destination.country}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-600 text-sm">Region</p>
                                    <p className="text-xl font-bold text-blue-900">{destination.region}</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-gray-600 text-sm">Starting From</p>
                                    <p className="text-xl font-bold text-green-600">LKR {destination.starting_fare.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>

                        {/* Booking Card */}
                        <div className="bg-blue-50 rounded-lg p-6 h-fit">
                            <h3 className="text-2xl font-bold mb-4 text-blue-900">Book Now!</h3>
                            <div className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center">
                                <p className="text-sm mb-2">Cheapest Price</p>
                                <p className="text-3xl font-bold">LKR {destination.starting_fare.toLocaleString()}</p>
                                <p className="text-xs mt-1">Starting from</p>
                            </div>
                            <div className="space-y-3">
                                <a
                                    href="https://wa.me/94765933255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition"
                                >
                                    📱 Book via WhatsApp
                                </a>
                                <a
                                    href="tel:+94112345678"
                                    className="block w-full bg-blue-900 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-800 transition"
                                >
                                    📞 Call +94 11 234 5678
                                </a>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-6 p-4 bg-white rounded-lg text-center">
                                <p className="text-yellow-600 font-bold mb-2">✓ Best Price Guarantee</p>
                                <p className="text-sm text-gray-600">Same-day booking confirmation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Why Book {destination.name} with JAAN Travels?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold mb-2">Best Price</h3>
                            <p className="text-sm text-gray-600">Lowest fares guaranteed</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-bold mb-2">Same-Day</h3>
                            <p className="text-sm text-gray-600">Confirm within hours</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl mb-3">💬</div>
                            <h3 className="font-bold mb-2">WhatsApp Easy</h3>
                            <p className="text-sm text-gray-600">Simple messaging booking</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg text-center">
                            <div className="text-4xl mb-3">✅</div>
                            <h3 className="font-bold mb-2">Trusted</h3>
                            <p className="text-sm text-gray-600">10+ years in business</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Destinations */}
            {relatedDestinations.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8">More Destinations in {destination.region}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedDestinations.map((dest) => (
                                <Link
                                    key={dest.id}
                                    href={route('destinations.show', dest.slug)}
                                    className="group"
                                >
                                    <div className="bg-blue-50 rounded-lg p-4 hover:shadow-lg transition h-full">
                                        <div className="text-3xl mb-2">{dest.flag_icon || '🌍'}</div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600">{dest.name}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{dest.country}</p>
                                        <p className="text-blue-600 font-semibold">
                                            From LKR {dest.starting_fare.toLocaleString()}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="bg-blue-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ticket to {destination.name}?</h2>
                    <p className="text-lg text-gray-200 mb-6">Get the cheapest fare and confirmed booking same day!</p>
                    <a
                        href="https://wa.me/94765933255"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
                    >
                        📱 Chat on WhatsApp Now
                    </a>
                </div>
            </section>
        </AppLayout>
    );
}
