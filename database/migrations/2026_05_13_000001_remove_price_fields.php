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
        Schema::table('destinations', function (Blueprint $table) {
            $table->dropColumn('starting_fare');
            $table->dropColumn('flag_icon');
            $table->dropColumn('order');
        });

        Schema::table('special_offers', function (Blueprint $table) {
            $table->dropColumn('price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->decimal('starting_fare', 10, 2)->default(0);
            $table->string('flag_icon')->nullable();
            $table->integer('order')->default(0);
        });

        Schema::table('special_offers', function (Blueprint $table) {
            $table->decimal('price', 10, 2)->default(0);
        });
    }
};
