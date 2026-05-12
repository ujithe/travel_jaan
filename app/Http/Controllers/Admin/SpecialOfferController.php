<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SpecialOffer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpecialOfferController extends Controller
{
    public function index()
    {
        $offers = SpecialOffer::orderBy('order')
            ->orderBy('expires_at', 'desc')
            ->paginate(20);

        return Inertia::render('Admin/SpecialOffers/Index', [
            'offers' => $offers,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/SpecialOffers/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'route' => 'required|string|max:255',
            'discount_percent' => 'nullable|integer|min:0|max:100',
            'expires_at' => 'required|date|after:today',
            'image' => 'nullable|url|max:2048',
            'is_active' => 'nullable|boolean',
            'order' => 'nullable|integer',
        ]);

        $validated['is_active'] = $request->boolean('is_active');
        $validated['order'] = $validated['order'] ?? 0;

        SpecialOffer::create($validated);

        return redirect()->route('admin.special-offers.index')->with('success', 'Special offer created successfully');
    }

    public function edit(SpecialOffer $specialOffer)
    {
        return Inertia::render('Admin/SpecialOffers/Edit', [
            'offer' => $specialOffer,
        ]);
    }

    public function update(Request $request, SpecialOffer $specialOffer)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'route' => 'required|string|max:255',
            'discount_percent' => 'nullable|integer|min:0|max:100',
            'expires_at' => 'required|date',
            'image' => 'nullable|url|max:2048',
            'is_active' => 'nullable|boolean',
            'order' => 'nullable|integer',
        ]);

        $validated['is_active'] = $request->boolean('is_active');
        $validated['order'] = $validated['order'] ?? 0;

        $specialOffer->update($validated);

        return redirect()->route('admin.special-offers.index')->with('success', 'Special offer updated successfully');
    }

    public function destroy(SpecialOffer $specialOffer)
    {
        $specialOffer->delete();

        return redirect()->route('admin.special-offers.index')->with('success', 'Special offer deleted successfully');
    }
}
