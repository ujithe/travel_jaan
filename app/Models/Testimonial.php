<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'customer_name',
        'message',
        'rating',
        'route',
        'savings',
        'image',
        'is_featured',
        'is_approved',
        'order',
    ];

    protected $casts = [
        'rating' => 'integer',
        'savings' => 'decimal:2',
        'is_featured' => 'boolean',
        'is_approved' => 'boolean',
    ];

    public function scopeApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }
}
