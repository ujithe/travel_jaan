<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Destination;
use App\Models\FAQ;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\Visa;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $destinations = Destination::where('is_featured', true)
            ->take(12)
            ->get();

        if ($destinations->isEmpty()) {
            $destinations = Destination::take(12)->get();
        }

        $testimonials = Testimonial::approved()->featured()->take(5)->get();
        $services = Service::active()->take(6)->get();
        $visas = Visa::active()->take(8)->get();

        return Inertia::render('Home', [
            'destinations' => $destinations,
            'testimonials' => $testimonials,
            'services' => $services,
            'visas' => $visas,
        ]);
    }

    public function about()
    {
        $services = Service::active()->get();
        $testimonials = Testimonial::approved()->take(8)->get();

        return Inertia::render('About', [
            'services' => $services,
            'testimonials' => $testimonials,
        ]);
    }

    public function destinations()
    {
        $destinations = Destination::orderBy('region')->orderBy('name')->get()
            ->groupBy('region');

        return Inertia::render('Destinations', [
            'destinations' => $destinations,
        ]);
    }

    public function visas()
    {
        $visas = Visa::active()->orderBy('name')->get();

        return Inertia::render('Visas', [
            'visas' => $visas,
        ]);
    }

    public function visa(Visa $visa)
    {
        $relatedVisas = Visa::active()
            ->where('id', '!=', $visa->id)
            ->take(6)
            ->get();

        return Inertia::render('Visa/Show', [
            'visa' => $visa,
            'relatedVisas' => $relatedVisas,
        ]);
    }

    public function destination(Destination $destination)
    {
        $relatedDestinations = Destination::where('region', $destination->region)
            ->where('id', '!=', $destination->id)
            ->take(4)
            ->get();

        return Inertia::render('Destination/Show', [
            'destination' => $destination,
            'relatedDestinations' => $relatedDestinations,
        ]);
    }

    public function services()
    {
        $services = Service::active()->get();

        return Inertia::render('Services', [
            'services' => $services,
        ]);
    }

    public function service(Service $service)
    {
        return Inertia::render('Service/Show', [
            'service' => $service,
        ]);
    }



    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function faq()
    {
        $faqs = FAQ::active()->orderBy('category')->get()
            ->groupBy('category');

        return Inertia::render('FAQ', [
            'faqs' => $faqs,
        ]);
    }

    public function blog()
    {
        $posts = BlogPost::published()
            ->orderBy('published_at', 'desc')
            ->paginate(10);

        return Inertia::render('Blog/Index', [
            'posts' => $posts,
        ]);
    }

    public function blogPost(BlogPost $blogPost)
    {
        $blogPost->incrementViews();

        $relatedPosts = BlogPost::published()
            ->where('id', '!=', $blogPost->id)
            ->orderBy('published_at', 'desc')
            ->take(3)
            ->get();

        return Inertia::render('Blog/Show', [
            'post' => $blogPost,
            'relatedPosts' => $relatedPosts,
        ]);
    }
}
