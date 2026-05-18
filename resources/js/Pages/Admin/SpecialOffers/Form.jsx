import React from 'react';
import { useForm } from '@inertiajs/react';

const toDateTimeInput = (value) => {
    if (!value) {
        return '';
    }

    return String(value).replace('Z', '').slice(0, 16);
};

export default function SpecialOfferForm({ offer = null }) {
    const isEdit = Boolean(offer);

    const { data, setData, post, processing, errors, transform } = useForm({
        title: offer?.title ?? '',
        description: offer?.description ?? '',
        route: offer?.route ?? '',
        discount_percent: offer?.discount_percent ?? '',
        expires_at: toDateTimeInput(offer?.expires_at),
        image_file: null,
        is_active: offer?.is_active ?? true,
    });

    const submit = (event) => {
        event.preventDefault();

        if (isEdit) {
            transform((data) => ({ ...data, _method: 'put' }));
            post(route('admin.special-offers.update', offer.id), { forceFormData: true });
            return;
        }

        post(route('admin.special-offers.store'), { forceFormData: true });
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Title</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(event) => setData('title', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Route</label>
                    <input
                        type="text"
                        value={data.route}
                        onChange={(event) => setData('route', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        placeholder="Colombo to Dubai"
                        required
                    />
                    {errors.route && <p className="mt-1 text-sm text-red-600">{errors.route}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Discount %</label>
                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={data.discount_percent}
                        onChange={(event) => setData('discount_percent', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.discount_percent && <p className="mt-1 text-sm text-red-600">{errors.discount_percent}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Expires At</label>
                    <input
                        type="datetime-local"
                        value={data.expires_at}
                        onChange={(event) => setData('expires_at', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.expires_at && <p className="mt-1 text-sm text-red-600">{errors.expires_at}</p>}
                </div>

            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Image Upload</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setData('image_file', event.target.files[0] ?? null)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                {offer?.image && (
                    <img
                        src={offer.image}
                        alt={`${offer.title} current`}
                        className="mt-3 h-20 w-32 rounded border border-slate-200 object-cover"
                    />
                )}
                {errors.image_file && <p className="mt-1 text-sm text-red-600">{errors.image_file}</p>}
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Description</label>
                <textarea
                    value={data.description}
                    onChange={(event) => setData('description', event.target.value)}
                    className="h-32 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    required
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                    type="checkbox"
                    checked={Boolean(data.is_active)}
                    onChange={(event) => setData('is_active', event.target.checked)}
                />
                Show in homepage "Today's Deals"
            </label>
            {errors.is_active && <p className="mt-1 text-sm text-red-600">{errors.is_active}</p>}

            <button
                type="submit"
                disabled={processing}
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
            >
                {processing ? 'Saving...' : isEdit ? 'Update Offer' : 'Create Offer'}
            </button>
        </form>
    );
}
