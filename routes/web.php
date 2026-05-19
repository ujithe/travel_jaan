<?php

use App\Http\Controllers\Admin\BlogPostController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DestinationController;
use App\Http\Controllers\Admin\FAQController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\VisaController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// Public Pages
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/destinations', [PageController::class, 'destinations'])->name('destinations.index');
Route::get('/visas', [PageController::class, 'visas'])->name('visas.index');
Route::get('/colombo-to-{visa}-visa', [PageController::class, 'visa'])->name('visas.show');
Route::get('/visas/{visa}', function (string $visa) {
    return redirect("/colombo-to-{$visa}-visa", 301);
})->name('visas.legacy');
Route::get('/colombo-to-{destination}', [PageController::class, 'destination'])->name('destinations.show');
Route::get('/destinations/{destination}', function (string $destination) {
    return redirect("/colombo-to-{$destination}", 301);
})->name('destinations.legacy');
Route::get('/services', [PageController::class, 'services'])->name('services.index');
Route::get('/services/{service}', [PageController::class, 'service'])->name('services.show');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/blog', [PageController::class, 'blog'])->name('blog.index');
Route::get('/blog/{blogPost}', [PageController::class, 'blogPost'])->name('blog.show');

// Admin Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        if (auth()->user()?->is_admin) {
            return redirect()->route('admin.dashboard');
        }

        return redirect()->route('home');
    })->name('dashboard');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', DashboardController::class)->name('dashboard');
    Route::redirect('/dashboard', '/admin')->name('dashboard.redirect');

    Route::resource('destinations', DestinationController::class);
    Route::resource('visas', VisaController::class);
    Route::resource('blog-posts', BlogPostController::class);
    Route::resource('testimonials', TestimonialController::class);
    Route::resource('faqs', FAQController::class);
    Route::resource('services', ServiceController::class);
});

require __DIR__ . '/auth.php';
