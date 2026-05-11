<?php

use App\Http\Controllers\Admin\BlogPostController;
use App\Http\Controllers\Admin\DestinationController;
use App\Http\Controllers\Admin\FAQController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SpecialOfferController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Pages
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/destinations', [PageController::class, 'destinations'])->name('destinations.index');
Route::get('/destinations/{destination}', [PageController::class, 'destination'])->name('destinations.show');
Route::get('/services', [PageController::class, 'services'])->name('services.index');
Route::get('/services/{service}', [PageController::class, 'service'])->name('services.show');
Route::get('/special-offers', [PageController::class, 'specialOffers'])->name('special-offers.index');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/blog', [PageController::class, 'blog'])->name('blog.index');
Route::get('/blog/{blogPost}', [PageController::class, 'blogPost'])->name('blog.show');

// Admin Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    // Destinations
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('destinations', DestinationController::class);
        Route::resource('blog-posts', BlogPostController::class);
        Route::resource('special-offers', SpecialOfferController::class);
        Route::resource('testimonials', TestimonialController::class);
        Route::resource('faqs', FAQController::class);
        Route::resource('services', ServiceController::class);
    });

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
