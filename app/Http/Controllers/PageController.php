<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Destination;
use App\Models\FAQ;
use App\Models\Service;
use App\Models\SpecialOffer;
use App\Models\Testimonial;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $destinations = Destination::orderBy('order')->take(12)->get();
        $specialOffers = SpecialOffer::active()->orderBy('order')->take(6)->get();
        $testimonials = Testimonial::approved()->featured()->orderBy('order')->take(5)->get();
        $services = Service::active()->orderBy('order')->take(6)->get();

        return Inertia::render('Home', [
            'destinations' => $destinations,
            'specialOffers' => $specialOffers,
            'testimonials' => $testimonials,
            'services' => $services,
        ]);
    }

    public function about()
    {
        $services = Service::active()->orderBy('order')->get();
        $testimonials = Testimonial::approved()->orderBy('order')->take(8)->get();

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
        $services = Service::active()->orderBy('order')->get();

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

    public function specialOffers()
    {
        $offers = SpecialOffer::active()->orderBy('order')->get();

        return Inertia::render('SpecialOffers', [
            'offers' => $offers,
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function faq()
    {
        $faqs = FAQ::active()->orderBy('category')->orderBy('order')->get()
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
