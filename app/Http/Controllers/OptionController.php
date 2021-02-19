<?php

namespace App\Http\Controllers;

use App\Models\Option;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class OptionController extends Controller
{
    //
    public function index(Question $question)
    {
        $options = Option::where('question_id', $question->id)->get();
        $code = HttpResponse::HTTP_OK;
        return Response::json([
            'status' => $code,
            'title' => 'Get all options of questions with id' . $question->id,
            'items' => $options
        ]);
    }
}
