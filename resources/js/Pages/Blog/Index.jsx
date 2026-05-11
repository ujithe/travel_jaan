import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function BlogIndex({ posts }) {
    const postList = posts?.data ?? [];
    const paginationLinks = posts?.links ?? [];

    return (
        <AppLayout title="Blog - JAAN Travels">
            <Head>
                <meta name="description" content="Read the latest travel tips, flight guides, and airline news from JAAN Travels." />
            </Head>

            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-12">Travel Blog</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {postList.map((post) => (
                            <Link key={post.id} href={route('blog.show', post.slug)}>
                                <article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition h-full">
                                    {post.featured_image && (
                                        <img
                                            src={post.featured_image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-sm text-gray-500">
                                                {new Date(post.published_at).toLocaleDateString()}
                                            </span>
                                            <span className="text-sm text-gray-500">{post.views} views</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-600 font-semibold">Read More →</span>
                                            <span className="text-sm text-gray-500">by {post.author}</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    {paginationLinks.length > 0 && (
                        <div className="mt-12 flex justify-center gap-2">
                            {paginationLinks.map((link, index) => {
                                const classes = `px-4 py-2 rounded ${link.active
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white border border-gray-200 hover:border-blue-900'
                                    }`;

                                if (!link.url) {
                                    return (
                                        <span
                                            key={index}
                                            className={`${classes} text-gray-400 cursor-not-allowed`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        className={classes}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </AppLayout>
    );
}
