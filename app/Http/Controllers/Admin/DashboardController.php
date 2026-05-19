<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\Destination;
use App\Models\Visa;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'destinations' => Destination::count(),
                'featuredDestinations' => Destination::where('is_featured', true)->count(),
                'blogPosts' => BlogPost::count(),
                'publishedPosts' => BlogPost::where('is_published', true)->count(),
                'visas' => Visa::count(),
                'activeVisas' => Visa::where('is_active', true)->count(),
            ],
        ]);
    }
}
