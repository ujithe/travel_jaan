import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function ServiceShow({ service }) {
    return (
        <AppLayout title={`${service.title} - JAAN Travels`}>
            <Head>
                <meta name="description" content={service.description} />
            </Head>

            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-6xl mb-4 block">{service.icon}</span>
                        <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-50 rounded-lg p-8 mb-8">
                        <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                        {service.details && (
                            <p className="text-gray-700">{service.details}</p>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-green-900">Ready to Use This Service?</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Contact JAAN Travels now via WhatsApp or phone to get started.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href="https://wa.me/94765933255"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition"
                            >
                                📱 WhatsApp Now
                            </a>
                            <a
                                href="tel:+94112345678"
                                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition"
                            >
                                📞 Call +94 11 234 5678
                            </a>
                        </div>
                    </div>

                    {/* Related Services */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Our Other Services</h2>
                        <Link
                            href={route('services.index')}
                            className="inline-block bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
                        >
                            View All Services →
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
