<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'code',
        'country',
        'region',
        'description',
        'starting_fare',
        'flag_icon',
        'image',
        'order',
        'is_featured',
    ];

    protected $casts = [
        'starting_fare' => 'decimal:2',
        'is_featured' => 'boolean',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
