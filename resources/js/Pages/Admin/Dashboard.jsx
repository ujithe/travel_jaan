import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Dashboard({ stats }) {
    const cards = [
        {
            title: 'Popular Destinations',
            value: stats.featuredDestinations,
            subtitle: `${stats.destinations} total destinations`,
            href: route('admin.destinations.index'),
        },
        {
            title: 'Visa Destinations',
            value: stats.activeVisas,
            subtitle: `${stats.visas} total visas`,
            href: route('admin.visas.index'),
        },

        {
            title: 'Published Blog Posts',
            value: stats.publishedPosts,
            subtitle: `${stats.blogPosts} total posts`,
            href: route('admin.blog-posts.index'),
        },
    ];

    return (
        <AdminLayout title="Admin Dashboard">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-slate-900">Dashboard</h2>
                <p className="mt-1 text-sm text-slate-600">
                    Manage homepage sections and content across destinations, visas, and blog.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((card) => (
                    <Link
                        key={card.title}
                        href={card.href}
                        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow"
                    >
                        <p className="text-sm font-medium text-slate-600">{card.title}</p>
                        <p className="mt-3 text-3xl font-semibold text-slate-900">{card.value}</p>
                        <p className="mt-2 text-sm text-slate-500">{card.subtitle}</p>
                    </Link>
                ))}
            </div>
        </AdminLayout>
    );
}
