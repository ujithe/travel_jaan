<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogPostController extends Controller
{
    public function index()
    {
        $posts = BlogPost::orderBy('published_at', 'desc')->paginate(20);

        return Inertia::render('Admin/BlogPosts/Index', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/BlogPosts/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'author' => 'nullable|string|max:255',
            'is_published' => 'boolean',
            'published_at' => 'nullable|date',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:160',
            'seo_keywords' => 'nullable|string',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);
        $validated['author'] = $validated['author'] ?? 'JAAN Travels';

        BlogPost::create($validated);

        return redirect()->route('admin.blog-posts.index')->with('success', 'Blog post created successfully');
    }

    public function edit(BlogPost $blog_post)
    {
        return Inertia::render('Admin/BlogPosts/Edit', [
            'post' => $blog_post,
        ]);
    }

    public function update(Request $request, BlogPost $blog_post)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'author' => 'nullable|string|max:255',
            'is_published' => 'boolean',
            'published_at' => 'nullable|date',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string|max:160',
            'seo_keywords' => 'nullable|string',
        ]);

        $validated['slug'] = \Str::slug($validated['title']);

        $blog_post->update($validated);

        return redirect()->route('admin.blog-posts.index')->with('success', 'Blog post updated successfully');
    }

    public function destroy(BlogPost $blog_post)
    {
        $blog_post->delete();

        return redirect()->route('admin.blog-posts.index')->with('success', 'Blog post deleted successfully');
    }
}
