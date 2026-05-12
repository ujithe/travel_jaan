<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DestinationController extends Controller
{
    public function index()
    {
        $destinations = Destination::orderBy('order')
            ->orderBy('region')
            ->orderBy('name')
            ->paginate(20);

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
            'flag_icon' => 'nullable|string|max:255',
            'image_file' => 'nullable|image|max:5120',
            'order' => 'nullable|integer',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['slug'] = $this->generateUniqueSlug($validated['name']);
        $validated['is_featured'] = $request->boolean('is_featured');
        $validated['order'] = $validated['order'] ?? 0;
        unset($validated['image_file']);

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('destinations', 'public');
            $validated['image'] = Storage::url($path);
        }

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
            'flag_icon' => 'nullable|string|max:255',
            'image_file' => 'nullable|image|max:5120',
            'order' => 'nullable|integer',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['slug'] = $this->generateUniqueSlug($validated['name'], $destination->id);
        $validated['is_featured'] = $request->boolean('is_featured');
        $validated['order'] = $validated['order'] ?? 0;
        unset($validated['image_file']);

        if ($request->hasFile('image_file')) {
            $this->deleteStoredImage($destination->image);
            $path = $request->file('image_file')->store('destinations', 'public');
            $validated['image'] = Storage::url($path);
        }

        $destination->update($validated);

        return redirect()->route('admin.destinations.index')->with('success', 'Destination updated successfully');
    }

    public function destroy(Destination $destination)
    {
        $this->deleteStoredImage($destination->image);
        $destination->delete();

        return redirect()->route('admin.destinations.index')->with('success', 'Destination deleted successfully');
    }

    private function generateUniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $base = Str::slug($name);
        $slug = $base;
        $counter = 2;

        while (
            Destination::query()
                ->when($ignoreId, fn ($query) => $query->where('id', '!=', $ignoreId))
                ->where('slug', $slug)
                ->exists()
        ) {
            $slug = "{$base}-{$counter}";
            $counter++;
        }

        return $slug;
    }

    private function deleteStoredImage(?string $url): void
    {
        if (! $url) {
            return;
        }

        $path = $this->storagePathFromUrl($url);
        if ($path && Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
    }

    private function storagePathFromUrl(string $url): ?string
    {
        $path = parse_url($url, PHP_URL_PATH);
        if (! $path || ! str_starts_with($path, '/storage/')) {
            return null;
        }

        return ltrim(substr($path, strlen('/storage/')), '/');
    }
}
