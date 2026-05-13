import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function SpecialOffersIndex({ offers }) {
    const deleteOffer = (offer) => {
        if (!window.confirm(`Delete "${offer.title}"?`)) {
            return;
        }

        router.delete(route('admin.special-offers.destroy', offer.id));
    };

    return (
        <AdminLayout title="Manage Today's Deals">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Today's Deals</h2>
                    <p className="mt-1 text-sm text-slate-600">
                        Active and unexpired offers appear on the homepage and `/special-offers`.
                    </p>
                </div>
                <Link
                    href={route('admin.special-offers.create')}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                    Add Offer
                </Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-600">
                        <tr>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Route</th>
                            <th className="px-4 py-3">Expires</th>
                            <th className="px-4 py-3">Active</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(offers?.data ?? []).map((offer) => (
                            <tr key={offer.id} className="border-t border-slate-100">
                                <td className="px-4 py-3 font-medium text-slate-900">{offer.title}</td>
                                <td className="px-4 py-3 text-slate-700">{offer.route}</td>
                                <td className="px-4 py-3 text-slate-700">
                                    {new Date(offer.expires_at).toLocaleString()}
                                </td>
                                <td className="px-4 py-3 text-slate-700">{offer.is_active ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-3">
                                        <Link
                                            href={route('admin.special-offers.edit', offer.id)}
                                            className="text-slate-900 underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => deleteOffer(offer)}
                                            className="text-red-600 underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
