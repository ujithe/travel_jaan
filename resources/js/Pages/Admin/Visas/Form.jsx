import React from 'react';
import { useForm } from '@inertiajs/react';

export default function VisaForm({ visa = null }) {
    const isEdit = Boolean(visa);
    const optionsText = Array.isArray(visa?.options) ? visa.options.join('\n') : '';

    const { data, setData, post, processing, errors, transform } = useForm({
        name: visa?.name ?? '',
        options_text: optionsText,
        image_file: null,
        is_active: visa?.is_active ?? true,
        seo_title: visa?.seo_title ?? '',
        seo_description: visa?.seo_description ?? '',
        seo_keywords: visa?.seo_keywords ?? '',
    });

    const submit = (event) => {
        event.preventDefault();

        if (isEdit) {
            transform((data) => ({ ...data, _method: 'put' }));
            post(route('admin.visas.update', visa.slug), { forceFormData: true });
            return;
        }

        post(route('admin.visas.store'), { forceFormData: true });
    };

    return (
        <form onSubmit={submit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Visa Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(event) => setData('name', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                        required
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Visa Options</label>
                <textarea
                    value={data.options_text}
                    onChange={(event) => setData('options_text', event.target.value)}
                    className="h-40 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    placeholder="One option per line"
                    required
                />
                <p className="mt-2 text-xs text-slate-500">Example: 30 Days Visit - LKR 30,450</p>
                {errors.options_text && <p className="mt-1 text-sm text-red-600">{errors.options_text}</p>}
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Image Upload</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setData('image_file', event.target.files[0] ?? null)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                />
                {visa?.image && (
                    <img
                        src={visa.image}
                        alt={`${visa.name} current`}
                        className="mt-3 h-20 w-32 rounded border border-slate-200 object-cover"
                    />
                )}
                {errors.image_file && <p className="mt-1 text-sm text-red-600">{errors.image_file}</p>}
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                    type="checkbox"
                    checked={Boolean(data.is_active)}
                    onChange={(event) => setData('is_active', event.target.checked)}
                />
                Active (visible on Visa pages)
            </label>
            {errors.is_active && <p className="mt-1 text-sm text-red-600">{errors.is_active}</p>}

            {/* SEO Section */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">SEO Settings</h3>
                <div className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">SEO Title</label>
                        <input
                            type="text"
                            value={data.seo_title}
                            onChange={(event) => setData('seo_title', event.target.value)}
                            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                            placeholder={`Visa for ${data.name || 'Country'} - JAAN Travels`}
                            maxLength={255}
                        />
                        <p className="mt-1 text-xs text-slate-400">Recommended: 50–60 characters. Leave blank to use default.</p>
                        {errors.seo_title && <p className="mt-1 text-sm text-red-600">{errors.seo_title}</p>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">SEO Description</label>
                        <textarea
                            value={data.seo_description}
                            onChange={(event) => setData('seo_description', event.target.value)}
                            className="h-20 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                            placeholder="A short description for search engines..."
                            maxLength={500}
                        />
                        <p className="mt-1 text-xs text-slate-400">Recommended: 150–160 characters. Leave blank to use default.</p>
                        {errors.seo_description && <p className="mt-1 text-sm text-red-600">{errors.seo_description}</p>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-slate-700">SEO Keywords</label>
                        <input
                            type="text"
                            value={data.seo_keywords}
                            onChange={(event) => setData('seo_keywords', event.target.value)}
                            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                            placeholder="visa, oman visa, jaan travels"
                            maxLength={255}
                        />
                        <p className="mt-1 text-xs text-slate-400">Comma-separated keywords.</p>
                        {errors.seo_keywords && <p className="mt-1 text-sm text-red-600">{errors.seo_keywords}</p>}
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={processing}
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
            >
                {processing ? 'Saving...' : isEdit ? 'Update Visa' : 'Create Visa'}
            </button>
        </form>
    );
}
