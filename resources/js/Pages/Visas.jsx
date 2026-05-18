import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Visas({ visas }) {
    const visaList = Array.isArray(visas) ? visas : [];

    return (
        <AppLayout title="Visa Services - JAAN Travels">
            <Head>
                <meta
                    name="description"
                    content="Visa assistance for popular destinations from Sri Lanka. Fast processing with WhatsApp support."
                />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Visa Services</h1>
                        <p className="text-gray-600">
                            We handle tourist and business visa support with clear guidance and fast processing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {visaList.map((visa) => (
                            <Link
                                key={visa.slug}
                                href={route('visas.show', visa.slug)}
                                className="group"
                            >
                                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition h-full">
                                    <div className="relative h-32">
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
                                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-600">
                                                {visa.name} Visa
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-600">Tourist and business guidance</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
                        <p className="text-lg font-semibold text-emerald-900">Need a custom plan?</p>
                        <p className="mt-2 text-sm text-emerald-900/80">
                            Please let us know your requirements. We can offer fast processing and special rates for bulk inquiries.
                        </p>
                        <a
                            href="https://wa.me/94765933255"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
