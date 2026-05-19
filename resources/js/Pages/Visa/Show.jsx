import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function VisaShow({ visa, relatedVisas }) {
    const optionsList = Array.isArray(visa?.options) ? visa.options : [];
    const relatedList = Array.isArray(relatedVisas) ? relatedVisas : [];
    const formatOption = (option) => {
        if (!option) {
            return '';
        }

        const cleaned = option.replace(/\s*-\s*LKR.*$/i, '').trim();
        return cleaned || option;
    };

    return (
        <AppLayout title={visa.seo_title || `Visa for ${visa.name} - JAAN Travels`} overlapHero={true}>
            <Head>
                <meta
                    name="description"
                    content={visa.seo_description || `Visa assistance from Colombo to ${visa.name}. Fast processing with WhatsApp support.`}
                />
                {visa.seo_keywords && (
                    <meta name="keywords" content={visa.seo_keywords} />
                )}
            </Head>

            <section className="relative overflow-hidden bg-slate-950 pt-28 pb-14 text-white sm:pt-36 sm:pb-16">
                {visa.image && (
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${visa.image})` }}
                    />
                )}
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.25), transparent 35%), radial-gradient(circle at 85% 0%, rgba(59, 130, 246, 0.2), transparent 35%), linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.96))',
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                        <div>
                            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                                Visa Services
                            </p>
                            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                                Visa for {visa.name}
                            </h1>
                            <p className="mt-3 text-base text-slate-200 sm:text-lg">
                                Colombo to {visa.name} support with clear guidance and fast processing.
                            </p>
                            <p className="mt-6 max-w-2xl text-sm text-slate-200 sm:text-base">
                                Share your travel dates and purpose. We will confirm requirements and help with submission steps on WhatsApp.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:p-6">
                            <h2 className="text-xl font-semibold">What You Get</h2>
                            <ul className="mt-4 space-y-3 text-sm text-slate-200">
                                <li>Document checklist with clear timelines</li>
                                <li>Fast processing guidance and updates</li>
                                <li>Dedicated WhatsApp support for follow ups</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">Visa Options for {visa.name}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {optionsList.map((option) => (
                                    <div key={option} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-xs uppercase tracking-wide text-slate-500">Option</p>
                                        <p className="text-lg font-semibold text-slate-900 mt-2">{formatOption(option)}</p>
                                    </div>
                                ))}
                                {optionsList.length === 0 && (
                                    <div className="rounded-xl border border-dashed border-slate-200 bg-white p-4 text-sm text-slate-600">
                                        Visa options will be shared on request. Please contact us for details.
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 md:sticky md:top-24">
                            <h3 className="mb-2 text-2xl font-bold text-slate-900">Need Help?</h3>
                            <p className="mb-4 text-sm text-slate-600">
                                Please let us know your requirements. We can offer fast processing and special rates for bulk inquiries.
                            </p>
                            <div className="mb-5 rounded-xl bg-white p-4">
                                <p className="text-xs uppercase tracking-wide text-slate-500">How It Works</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li>1. Share your travel dates and purpose</li>
                                    <li>2. Receive document checklist and pricing</li>
                                    <li>3. Submit and track via WhatsApp</li>
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
                            </div>

                            <div className="mt-6 rounded-xl bg-white p-4 text-center">
                                <p className="mb-1 font-bold text-slate-900">Trusted JAAN Team</p>
                                <p className="text-sm text-slate-600">Fast response and same-day updates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {relatedList.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold mb-8">More Visa Destinations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedList.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={route('visas.show', item.slug)}
                                    className="group"
                                >
                                    <div className="h-full rounded-xl border border-slate-200 bg-white p-4 transition group-hover:shadow-lg">
                                        <div className="relative mb-4 h-24 overflow-hidden rounded-lg">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 via-white to-slate-100">
                                                    <span className="text-sm font-semibold text-slate-700">{item.name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-emerald-600">{item.name}</h4>
                                        <p className="mb-3 text-sm text-gray-600">Visa assistance</p>
                                        <p className="text-sm font-semibold text-slate-800">View Options</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </AppLayout>
    );
}
