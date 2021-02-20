<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;
    protected $fillable = [
        'label',
        'content',
        'question_id'
    ];

    public function question()
    {
        $this->belongsTo(Question::class, 'question_id');
    }
}
