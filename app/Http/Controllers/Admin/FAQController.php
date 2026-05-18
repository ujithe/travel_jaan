<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FAQ;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FAQController extends Controller
{
    public function index()
    {
        $faqs = FAQ::orderBy('category')->paginate(20);

        return Inertia::render('Admin/FAQs/Index', [
            'faqs' => $faqs,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/FAQs/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string',
            'category' => 'required|string|max:255',

            'is_active' => 'boolean',
        ]);

        FAQ::create($validated);

        return redirect()->route('admin.faqs.index')->with('success', 'FAQ created successfully');
    }

    public function edit(FAQ $faq)
    {
        return Inertia::render('Admin/FAQs/Edit', [
            'faq' => $faq,
        ]);
    }

    public function update(Request $request, FAQ $faq)
    {
        $validated = $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string',
            'category' => 'required|string|max:255',

            'is_active' => 'boolean',
        ]);

        $faq->update($validated);

        return redirect()->route('admin.faqs.index')->with('success', 'FAQ updated successfully');
    }

    public function destroy(FAQ $faq)
    {
        $faq->delete();

        return redirect()->route('admin.faqs.index')->with('success', 'FAQ deleted successfully');
    }
}
