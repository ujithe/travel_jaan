import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function BlogPostsIndex({ posts }) {
    const deletePost = (post) => {
        if (!window.confirm(`Delete "${post.title}"?`)) {
            return;
        }

        router.delete(route('admin.blog-posts.destroy', post.id));
    };

    return (
        <AdminLayout title="Manage Blog">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Blog Posts</h2>
                    <p className="mt-1 text-sm text-slate-600">
                        Control what appears publicly on `/blog` using the publish toggle.
                    </p>
                </div>
                <Link
                    href={route('admin.blog-posts.create')}
                    className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                    Add Post
                </Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50 text-left text-slate-600">
                        <tr>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Published</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Views</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(posts?.data ?? []).map((post) => (
                            <tr key={post.id} className="border-t border-slate-100">
                                <td className="px-4 py-3 font-medium text-slate-900">{post.title}</td>
                                <td className="px-4 py-3 text-slate-700">{post.is_published ? 'Yes' : 'No'}</td>
                                <td className="px-4 py-3 text-slate-700">
                                    {post.published_at ? new Date(post.published_at).toLocaleString() : '-'}
                                </td>
                                <td className="px-4 py-3 text-slate-700">{post.views ?? 0}</td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-3">
                                        <Link
                                            href={route('admin.blog-posts.edit', post.id)}
                                            className="text-slate-900 underline"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => deletePost(post)}
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
