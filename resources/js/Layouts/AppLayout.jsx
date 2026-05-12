import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import WhatsAppButton from '@/Components/WhatsAppButton';

export default function AppLayout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <Header />
            <main className="min-h-screen overflow-x-hidden bg-gray-50 pt-16 md:pt-20">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
