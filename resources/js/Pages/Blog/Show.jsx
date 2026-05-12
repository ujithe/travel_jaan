import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function BlogShow({ post, relatedPosts }) {
    return (
        <AppLayout title={post.seo_title || post.title}>
            <Head>
                <meta name="description" content={post.seo_description || post.excerpt} />
                {post.seo_keywords && <meta name="keywords" content={post.seo_keywords} />}
            </Head>

            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Article Header */}
                    <article>
                        <header className="mb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 border-b pb-4">
                                <span>By {post.author}</span>
                                <span>📅 {new Date(post.published_at).toLocaleDateString()}</span>
                                <span>👁️ {post.views.toLocaleString()} views</span>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featured_image && (
                            <img
                                src={post.featured_image}
                                alt={post.title}
                                className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
                            />
                        )}

                        {/* Content */}
                        <div className="bg-white p-6 sm:p-8 rounded-lg mb-8">
                            <p className="text-lg text-gray-600 mb-6 italic">{post.excerpt}</p>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                {post.content}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-lg mb-8">
                            <h3 className="text-2xl font-bold mb-3 text-blue-900">Need Help Booking?</h3>
                            <p className="text-gray-700 mb-4">
                                Contact JAAN Travels now to book your cheapest flights!
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row flex-wrap">
                                <a
                                    href="https://wa.me/94765933255"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-6 py-2 rounded font-bold text-center hover:bg-green-600"
                                >
                                    WhatsApp Us
                                </a>
                                <a
                                    href="tel:+94765933255"
                                    className="bg-blue-900 text-white px-6 py-2 rounded font-bold text-center hover:bg-blue-800"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <section className="mt-12">
                            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={route('blog.show', relatedPost.slug)}
                                    >
                                        <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                                            <div className="p-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm mb-3">
                                                    {relatedPost.excerpt}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-500">
                                                        {new Date(relatedPost.published_at).toLocaleDateString()}
                                                    </span>
                                                    <span className="text-blue-600 font-semibold text-sm">
                                                        Read →
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </AppLayout>
    );
}
