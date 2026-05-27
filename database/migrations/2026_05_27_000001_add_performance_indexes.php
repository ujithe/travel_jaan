<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->index('is_featured');
            $table->index('region');
        });

        Schema::table('visas', function (Blueprint $table) {
            $table->index('is_active');
        });

        Schema::table('blog_posts', function (Blueprint $table) {
            $table->index('is_published');
            $table->index('published_at');
        });

        Schema::table('testimonials', function (Blueprint $table) {
            $table->index(['is_approved', 'is_featured']);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->index('is_active');
        });

        Schema::table('faqs', function (Blueprint $table) {
            $table->index(['is_active', 'category']);
        });
    }

    public function down(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->dropIndex(['is_featured']);
            $table->dropIndex(['region']);
        });

        Schema::table('visas', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
        });

        Schema::table('blog_posts', function (Blueprint $table) {
            $table->dropIndex(['is_published']);
            $table->dropIndex(['published_at']);
        });

        Schema::table('testimonials', function (Blueprint $table) {
            $table->dropIndex(['is_approved', 'is_featured']);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->dropIndex(['is_active']);
        });

        Schema::table('faqs', function (Blueprint $table) {
            $table->dropIndex(['is_active', 'category']);
        });
    }
};
