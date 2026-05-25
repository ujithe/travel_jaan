<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visa extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'options',
        'image',
        'is_active',
        'seo_title',
        'seo_description',
        'seo_keywords',
    ];

    protected $casts = [
        'options' => 'array',
        'is_active' => 'boolean',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function resolveRouteBinding($value, $field = null)
    {
        // Try exact match first
        $record = parent::resolveRouteBinding($value, $field);
        if ($record) {
            return $record;
        }

        // If not found, and value doesn't end with '-visa', try adding it
        if (!str_ends_with($value, '-visa')) {
            return parent::resolveRouteBinding($value . '-visa', $field);
        }

        // If value ends with '-visa', try removing it
        return parent::resolveRouteBinding(substr($value, 0, -5), $field);
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
