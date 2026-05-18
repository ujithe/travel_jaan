<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Visa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class VisaController extends Controller
{
    public function index()
    {
        $visas = Visa::orderBy('name')
            ->paginate(20);

        return Inertia::render('Admin/Visas/Index', [
            'visas' => $visas,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Visas/Create');
    }

    public function store(Request $request)
    {
        $validated = $this->validateVisa($request);
        $validated['slug'] = $this->generateUniqueSlug($validated['name']);
        $validated['is_active'] = $request->boolean('is_active');

        $options = $this->parseOptions($validated['options_text']);
        if (! $options) {
            return back()
                ->withErrors(['options_text' => 'Please provide at least one visa option.'])
                ->withInput();
        }

        $validated['options'] = $options;
        unset($validated['options_text']);

        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('visas', 'public');
            $validated['image'] = Storage::url($path);
        }

        unset($validated['image_file']);

        Visa::create($validated);

        return redirect()->route('admin.visas.index')->with('success', 'Visa created successfully');
    }

    public function edit(Visa $visa)
    {
        return Inertia::render('Admin/Visas/Edit', [
            'visa' => $visa,
        ]);
    }

    public function update(Request $request, Visa $visa)
    {
        $validated = $this->validateVisa($request);
        $validated['slug'] = $this->generateUniqueSlug($validated['name'], $visa->id);
        $validated['is_active'] = $request->boolean('is_active');

        $options = $this->parseOptions($validated['options_text']);
        if (! $options) {
            return back()
                ->withErrors(['options_text' => 'Please provide at least one visa option.'])
                ->withInput();
        }

        $validated['options'] = $options;
        unset($validated['options_text']);

        if ($request->hasFile('image_file')) {
            $this->deleteStoredImage($visa->image);
            $path = $request->file('image_file')->store('visas', 'public');
            $validated['image'] = Storage::url($path);
        }

        unset($validated['image_file']);

        $visa->update($validated);

        return redirect()->route('admin.visas.index')->with('success', 'Visa updated successfully');
    }

    public function destroy(Visa $visa)
    {
        $this->deleteStoredImage($visa->image);
        $visa->delete();

        return redirect()->route('admin.visas.index')->with('success', 'Visa deleted successfully');
    }

    private function validateVisa(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:255',
            'options_text' => 'required|string',
            'image_file' => 'nullable|image|max:10240',

            'is_active' => 'boolean',
        ]);
    }

    private function parseOptions(string $optionsText): array
    {
        return collect(preg_split('/\r\n|\r|\n/', $optionsText))
            ->map(fn($line) => trim($line))
            ->filter()
            ->values()
            ->all();
    }

    private function generateUniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $base = Str::slug($name);
        $slug = $base;
        $counter = 2;

        while (
            Visa::query()
            ->when($ignoreId, fn($query) => $query->where('id', '!=', $ignoreId))
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
