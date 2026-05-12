import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ title, children }) {
    const { url, props } = usePage();
    const flashSuccess = props?.flash?.success;
    const flashError = props?.flash?.error;

    const navItems = [
        {
            href: route('admin.dashboard'),
            label: 'Dashboard',
            active: url === '/admin' || url === '/admin/dashboard',
        },
        {
            href: route('admin.destinations.index'),
            label: 'Destinations',
            active: url.startsWith('/admin/destinations'),
        },
        {
            href: route('admin.special-offers.index'),
            label: 'Today Deals',
            active: url.startsWith('/admin/special-offers'),
        },
        {
            href: route('admin.blog-posts.index'),
            label: 'Blog',
            active: url.startsWith('/admin/blog-posts'),
        },
    ];

    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-slate-100">
                <header className="border-b border-slate-200 bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Admin Panel</p>
                            <h1 className="text-xl font-semibold text-slate-900">JAAN Travels</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                href={route('home')}
                                className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            >
                                View Site
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                    <nav className="mx-auto flex max-w-7xl gap-2 px-4 pb-4 sm:px-6 lg:px-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-md px-3 py-2 text-sm ${
                                    item.active
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </header>

                <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    {flashSuccess && (
                        <div className="mb-6 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                            {flashSuccess}
                        </div>
                    )}
                    {flashError && (
                        <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {flashError}
                        </div>
                    )}
                    {children}
                </main>
            </div>
        </>
    );
}
