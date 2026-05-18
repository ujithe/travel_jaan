import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function VisasIndex({ visas }) {
    const deleteVisa = (visa) => {
        if (!window.confirm(`Delete "${visa.name}"?`)) {
            return;
        }

        router.delete(route('admin.visas.destroy', visa.slug));
    };

    return (
        <AdminLayout title="Manage Visas">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Visas</h2>
                    <p className="mt-1 text-sm text-slate-600">Active visas appear on the Visa landing page.</p>
                </div>
                <Link
                    href={route('admin.visas.create')}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                    Add Visa
                </Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-600">
                        <tr>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Options</th>
                            <th className="px-4 py-3">Active</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(visas?.data ?? []).map((visa) => (
                            <tr key={visa.id} className="border-t border-slate-100">
                                <td className="px-4 py-3 font-medium text-slate-900">{visa.name}</td>
                                <td className="px-4 py-3 text-slate-700">{visa.options?.length ?? 0}</td>
                                <td className="px-4 py-3 text-slate-700">{visa.is_active ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-3">
                                        <Link
                                            href={route('admin.visas.edit', visa.slug)}
                                            className="text-slate-900 underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => deleteVisa(visa)}
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
