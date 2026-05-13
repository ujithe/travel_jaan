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
                        <span className="text-5xl sm:text-6xl mb-4 block">{service.icon}</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{service.title}</h1>
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
