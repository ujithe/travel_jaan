import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function SpecialOffers({ offers }) {
    return (
        <AppLayout title="Special Offers - JAAN Travels">
            <Head>
                <meta name="description" content="Check out our latest special offers and promotions on air tickets from Sri Lanka." />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-3 text-center">🎉 Special Offers</h1>
                    <p className="text-xl text-gray-600 text-center mb-12">
                        Limited time deals on flights to your favorite destinations
                    </p>

                    {offers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {offers.map((offer) => {
                                const daysLeft = Math.ceil(
                                    (new Date(offer.expires_at) - new Date()) / (1000 * 60 * 60 * 24)
                                );
                                const isExpiring = daysLeft <= 3;

                                return (
                                    <div
                                        key={offer.id}
                                        className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition ${
                                            isExpiring ? 'bg-red-50 border-2 border-red-300' : 'bg-white'
                                        }`}
                                    >
                                        {/* Deal Badge */}
                                        {isExpiring && (
                                            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold mb-3 inline-block">
                                                ⏰ Expiring Soon!
                                            </div>
                                        )}

                                        <h3 className="text-2xl font-bold mb-2 text-gray-900">{offer.title}</h3>
                                        <p className="text-gray-600 mb-4">{offer.description}</p>

                                        {/* Route */}
                                        <div className="mb-4 p-3 bg-blue-50 rounded">
                                            <p className="text-sm text-gray-600">Route</p>
                                            <p className="font-bold text-lg text-blue-900">{offer.route}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-red-600">
                                                LKR {offer.price.toLocaleString()}
                                            </span>
                                            {offer.discount_percent && (
                                                <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-bold">
                                                    Save {offer.discount_percent}%
                                                </span>
                                            )}
                                        </div>

                                        {/* Expiry */}
                                        <div className="mb-6 p-3 bg-gray-100 rounded">
                                            <p className="text-sm text-gray-600">Expires In</p>
                                            <p className="font-bold text-lg">
                                                {daysLeft > 0 ? `${daysLeft} days` : 'Expired'}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(offer.expires_at).toLocaleDateString()}
                                            </p>
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href="https://wa.me/94712345678"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 rounded-lg transition"
                                        >
                                            📱 Book This Deal
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg p-12 text-center">
                            <p className="text-gray-600 mb-4">No active offers at the moment.</p>
                            <p className="text-gray-600">WhatsApp us for latest deals and prices!</p>
                        </div>
                    )}

                    {/* Info Box */}
                    <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Don't Miss Out!</h2>
                        <p className="text-gray-700 mb-6">
                            Follow us and WhatsApp to get notified about new deals as soon as they're released.
                        </p>
                        <a
                            href="https://wa.me/94712345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition"
                        >
                            📱 Add to WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* How to Claim */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">How to Claim Your Deal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-900">1</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Choose Your Deal</h3>
                            <p className="text-gray-600">Pick any offer from the list above</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-900">2</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">WhatsApp Us</h3>
                            <p className="text-gray-600">Click the book button and confirm the deal</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-blue-900">3</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Get Your Ticket</h3>
                            <p className="text-gray-600">Receive confirmation and tickets within hours</p>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
