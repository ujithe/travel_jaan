<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Dubai, London, etc.
            $table->string('slug')->unique();
            $table->string('code'); // DXB, LHR, etc.
            $table->string('country'); // United Arab Emirates, UK, etc.
            $table->string('region'); // Middle East, Europe, etc.
            $table->text('description')->nullable();
            $table->decimal('starting_fare', 10, 2); // Starting fare in LKR
            $table->string('flag_icon')->nullable(); // Path to flag image
            $table->string('image')->nullable(); // Hero image for destination page
            $table->integer('order')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
