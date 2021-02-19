<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;

class AnswerController extends Controller
{
    //
    public function index(Question $question)
    {
        $anwser  = Answer::where('question_id', $question->id)->get();
        $code = HttpResponse::HTTP_OK;
        return Response::json([
            'status' => $code,
            'title' => 'Get answer of questions with id' . $question->id,
            'items' => $anwser
        ]);
    }
}
