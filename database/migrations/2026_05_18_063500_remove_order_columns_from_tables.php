<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('visas', function (Blueprint $table) {
            $table->dropColumn('order');
        });

        Schema::table('faqs', function (Blueprint $table) {
            $table->dropColumn('order');
        });

        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn('order');
        });

        Schema::table('testimonials', function (Blueprint $table) {
            $table->dropColumn('order');
        });

        Schema::table('special_offers', function (Blueprint $table) {
            $table->dropColumn('order');
        });
    }

    public function down(): void
    {
        Schema::table('visas', function (Blueprint $table) {
            $table->integer('order')->default(0);
        });

        Schema::table('faqs', function (Blueprint $table) {
            $table->integer('order')->default(0);
        });

        Schema::table('services', function (Blueprint $table) {
            $table->integer('order')->default(0);
        });

        Schema::table('testimonials', function (Blueprint $table) {
            $table->integer('order')->default(0);
        });

        Schema::table('special_offers', function (Blueprint $table) {
            $table->integer('order')->default(0);
        });
    }
};
