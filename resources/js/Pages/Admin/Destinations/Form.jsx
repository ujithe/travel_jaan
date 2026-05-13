import React from 'react';
import { useForm } from '@inertiajs/react';

export default function DestinationForm({ destination = null }) {
    const isEdit = Boolean(destination);

    const { data, setData, post, put, processing, errors } = useForm({
        name: destination?.name ?? '',
        code: destination?.code ?? '',
        country: destination?.country ?? '',
        region: destination?.region ?? '',
        description: destination?.description ?? '',
        image_file: null,
        is_featured: Boolean(destination?.is_featured),
    });

    const submit = (event) => {
        event.preventDefault();

        if (isEdit) {
            put(route('admin.destinations.update', destination.slug), { forceFormData: true });
            return;
        }

        post(route('admin.destinations.store'), { forceFormData: true });
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(event) => setData('name', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Airport Code</label>
                    <input
                        type="text"
                        value={data.code}
                        onChange={(event) => setData('code', event.target.value.toUpperCase())}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.code && <p className="mt-1 text-sm text-red-600">{errors.code}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Country</label>
                    <input
                        type="text"
                        value={data.country}
                        onChange={(event) => setData('country', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Region</label>
                    <input
                        type="text"
                        value={data.region}
                        onChange={(event) => setData('region', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.region && <p className="mt-1 text-sm text-red-600">{errors.region}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Image Upload</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => setData('image_file', event.target.files[0] ?? null)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {destination?.image && (
                        <img
                            src={destination.image}
                            alt={`${destination.name} current`}
                            className="mt-3 h-20 w-32 rounded border border-slate-200 object-cover"
                        />
                    )}
                    {errors.image_file && <p className="mt-1 text-sm text-red-600">{errors.image_file}</p>}
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
                <textarea
                    value={data.description}
                    onChange={(event) => setData('description', event.target.value)}
                    className="h-32 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                    type="checkbox"
                    checked={data.is_featured}
                    onChange={(event) => setData('is_featured', event.target.checked)}
                />
                Show in homepage "Popular Destinations"
            </label>
            {errors.is_featured && <p className="mt-1 text-sm text-red-600">{errors.is_featured}</p>}

            <div className="flex gap-3">
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
                >
                    {processing ? 'Saving...' : isEdit ? 'Update Destination' : 'Create Destination'}
                </button>
            </div>
        </form>
    );
}
