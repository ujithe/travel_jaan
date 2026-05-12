import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import SpecialOfferForm from './Form';

export default function CreateSpecialOffer() {
    return (
        <AdminLayout title="Create Offer">
            <div className="mb-6 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">Add Today's Deal</h2>
                <Link href={route('admin.special-offers.index')} className="text-sm font-medium text-slate-700 underline">
                    Back to list
                </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
                <SpecialOfferForm />
            </div>
        </AdminLayout>
    );
}
