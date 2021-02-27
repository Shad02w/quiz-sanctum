<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'state'
    ];

    public function answerpapers()
    {
        return $this->hasMany(AnswerPaper::class);
    }
}
