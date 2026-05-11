import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function AppLayout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <Header />
            <main className="min-h-screen bg-gray-50">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
