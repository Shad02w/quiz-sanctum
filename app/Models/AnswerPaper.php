<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnswerPaper extends Model
{
    use HasFactory;
    protected $fillable = [
        'question_id',
        'option_id',
        'candidate_id'
    ];

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }
}
