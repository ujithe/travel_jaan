<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = Destination::orderBy('region')->orderBy('name')->paginate(20);

        return Inertia::render('Admin/Destinations/Index', [
            'destinations' => $destinations,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Destinations/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:10',
            'country' => 'required|string|max:255',
            'region' => 'required|string|max:255',
            'description' => 'nullable|string',
            'starting_fare' => 'required|numeric|min:0',
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
        ]);

        $validated['slug'] = \Str::slug($validated['name']);

        Destination::create($validated);

        return redirect()->route('admin.destinations.index')->with('success', 'Destination created successfully');
    }

    public function edit(Destination $destination)
    {
        return Inertia::render('Admin/Destinations/Edit', [
            'destination' => $destination,
        ]);
    }

    public function update(Request $request, Destination $destination)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'required|string|max:10',
            'country' => 'required|string|max:255',
            'region' => 'required|string|max:255',
            'description' => 'nullable|string',
            'starting_fare' => 'required|numeric|min:0',
            'order' => 'nullable|integer',
            'is_featured' => 'boolean',
        ]);

        $validated['slug'] = \Str::slug($validated['name']);

        $destination->update($validated);

        return redirect()->route('admin.destinations.index')->with('success', 'Destination updated successfully');
    }

    public function destroy(Destination $destination)
    {
        $destination->delete();

        return redirect()->route('admin.destinations.index')->with('success', 'Destination deleted successfully');
    }
}
