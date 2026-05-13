import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function DestinationsIndex({ destinations }) {
    const deleteDestination = (destination) => {
        if (!window.confirm(`Delete "${destination.name}"?`)) {
            return;
        }

        router.delete(route('admin.destinations.destroy', destination.slug));
    };

    return (
        <AdminLayout title="Manage Destinations">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Destinations</h2>
                    <p className="mt-1 text-sm text-slate-600">
                        Featured destinations appear in homepage "Popular Destinations".
                    </p>
                </div>
                <Link
                    href={route('admin.destinations.create')}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                    Add Destination
                </Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-600">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Region</th>
                            <th className="px-4 py-3">Featured</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(destinations?.data ?? []).map((destination) => (
                            <tr key={destination.id} className="border-t border-slate-100">
                                <td className="px-4 py-3 font-medium text-slate-900">
                                    {destination.name}
                                </td>
                                <td className="px-4 py-3 text-slate-700">{destination.region}</td>
                                <td className="px-4 py-3 text-slate-700">{destination.is_featured ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-3">
                                        <Link
                                            href={route('admin.destinations.edit', destination.slug)}
                                            className="text-slate-900 underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => deleteDestination(destination)}
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
