import React from 'react';
import { useForm } from '@inertiajs/react';

const toDateTimeInput = (value) => {
    if (!value) {
        return '';
    }

    return String(value).replace('Z', '').slice(0, 16);
};

export default function BlogPostForm({ postData = null }) {
    const isEdit = Boolean(postData);

    const { data, setData, post, put, processing, errors } = useForm({
        title: postData?.title ?? '',
        excerpt: postData?.excerpt ?? '',
        content: postData?.content ?? '',
        author: postData?.author ?? 'JAAN Travels',
        featured_image: postData?.featured_image ?? '',
        is_published: Boolean(postData?.is_published),
        published_at: toDateTimeInput(postData?.published_at),
        seo_title: postData?.seo_title ?? '',
        seo_description: postData?.seo_description ?? '',
        seo_keywords: postData?.seo_keywords ?? '',
    });

    const submit = (event) => {
        event.preventDefault();

        if (isEdit) {
            put(route('admin.blog-posts.update', postData.id));
            return;
        }

        post(route('admin.blog-posts.store'));
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
                    <label className="mb-1 block text-sm font-medium text-slate-700">Author</label>
                    <input
                        type="text"
                        value={data.author}
                        onChange={(event) => setData('author', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.author && <p className="mt-1 text-sm text-red-600">{errors.author}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Featured Image URL</label>
                    <input
                        type="url"
                        value={data.featured_image}
                        onChange={(event) => setData('featured_image', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.featured_image && <p className="mt-1 text-sm text-red-600">{errors.featured_image}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Published At</label>
                    <input
                        type="datetime-local"
                        value={data.published_at}
                        onChange={(event) => setData('published_at', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.published_at && <p className="mt-1 text-sm text-red-600">{errors.published_at}</p>}
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Excerpt</label>
                <textarea
                    value={data.excerpt}
                    onChange={(event) => setData('excerpt', event.target.value)}
                    className="h-28 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    required
                />
                {errors.excerpt && <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>}
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Content</label>
                <textarea
                    value={data.content}
                    onChange={(event) => setData('content', event.target.value)}
                    className="h-64 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    required
                />
                {errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">SEO Title</label>
                    <input
                        type="text"
                        value={data.seo_title}
                        onChange={(event) => setData('seo_title', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.seo_title && <p className="mt-1 text-sm text-red-600">{errors.seo_title}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">SEO Description</label>
                    <input
                        type="text"
                        value={data.seo_description}
                        onChange={(event) => setData('seo_description', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.seo_description && <p className="mt-1 text-sm text-red-600">{errors.seo_description}</p>}
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">SEO Keywords</label>
                    <input
                        type="text"
                        value={data.seo_keywords}
                        onChange={(event) => setData('seo_keywords', event.target.value)}
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
                    />
                    {errors.seo_keywords && <p className="mt-1 text-sm text-red-600">{errors.seo_keywords}</p>}
                </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-700">
                <input
                    type="checkbox"
                    checked={data.is_published}
                    onChange={(event) => setData('is_published', event.target.checked)}
                />
                Published (visible on `/blog`)
            </label>
            {errors.is_published && <p className="mt-1 text-sm text-red-600">{errors.is_published}</p>}

            <button
                type="submit"
                disabled={processing}
                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
            >
                {processing ? 'Saving...' : isEdit ? 'Update Blog Post' : 'Create Blog Post'}
            </button>
        </form>
    );
}
