<?php

namespace App\Http\Controllers;

use App\Models\AnswerPaper;
use App\Models\Candidate;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isEmpty;

class AnswerPaperController extends Controller
{
    private function badRequest(string $title, array $invalidPramas)
    {
        return Response::json([
            'status' => HttpResponse::HTTP_BAD_REQUEST,
            'title' => $title,
            'invalidPramas' => $invalidPramas
        ], HttpResponse::HTTP_BAD_REQUEST);
    }

    private function notFound(string $title)
    {
        return Response::json([
            'status' => HttpResponse::HTTP_NOT_FOUND,
            'title' => $title
        ], HttpResponse::HTTP_NOT_FOUND);
    }
    /**
     * Get a question without duplicate
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Candidate $candidate)
    {
        // Get all question that this caidiate has done
        if (!$candidate) return $this->notFound('Candidate can not be found');
        $answereds =  $candidate->answerpaper->toArray();
        $questions = Question::all()->toArray();
        $questionsPool =  array_filter(
            $questions,
            fn ($question) =>
            !in_array($question['id'], array_map(fn ($answered) => $answered['id'], $answereds))
        );
        $questions;
        if (isEmpty($questionsPool))
            $questions[0];
        $question = $questionsPool[array_rand($questionsPool)];
        return Response::json([
            'status' => HttpResponse::HTTP_OK,
            'title' => 'Get a random question',
            'items' => [
                $question
            ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Candidate $candidate)
    {
        if (!$candidate) return $this->notFound('Candidate can not be found');
        $validator = Validator::make($request->all(), [
            'question_id' => 'required|numeric',
            'option_id' => 'required|numeric'
        ]);
        if ($validator->fails()) return $this->badRequest(
            'Invalid request body',
            $validator->getMessageBag()->toArray()
        );
        $answer = AnswerPaper::create([
            'question_id' => $request->input('question_id'),
            'option_id' => $request->input('option_id'),
            'candidate_id' => $candidate->id,
        ]);
        return Response::json([
            'status' => HttpResponse::HTTP_OK,
            'title' => 'Submit question answer',
            'items' => [
                $answer
            ]
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
