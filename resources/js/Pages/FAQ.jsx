import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function FAQ({ faqs }) {
    const [openId, setOpenId] = useState(null);

    return (
        <AppLayout title="FAQ - JAAN Travels">
            <Head>
                <meta name="description" content="Frequently asked questions about JAAN Travels' air ticket booking service." />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>

                    {Object.entries(faqs).map(([category, categoryFaqs]) => (
                        <div key={category} className="mb-12">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 pb-3 border-b-2 border-yellow-400">
                                {category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}
                            </h2>

                            <div className="space-y-3">
                                {categoryFaqs.map((faq) => (
                                    <div key={faq.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition">
                                        <button
                                            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                            className="w-full p-6 text-left flex justify-between items-start hover:bg-gray-50"
                                        >
                                            <span className="font-semibold text-gray-900">{faq.question}</span>
                                            <span className="ml-4 text-blue-900 flex-shrink-0">
                                                {openId === faq.id ? '−' : '+'}
                                            </span>
                                        </button>

                                        {openId === faq.id && (
                                            <div className="px-6 pb-6 text-gray-700 border-t pt-4">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* More Questions */}
                    <div className="bg-blue-50 rounded-lg p-8 text-center mt-12">
                        <h2 className="text-2xl font-bold mb-4">Can't find your answer?</h2>
                        <p className="text-gray-700 mb-6">
                            Feel free to reach out to us on WhatsApp or phone - we're here to help!
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a
                                href="https://wa.me/94712345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                            >
                                WhatsApp Us
                            </a>
                            <a
                                href="tel:+94112345678"
                                className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
                            >
                                Call +94 11 234 5678
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
