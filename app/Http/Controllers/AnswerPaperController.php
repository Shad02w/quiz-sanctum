<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isEmpty;

class AnswerPaperController extends Controller
{
    private function badRequest(string $message)
    {
        return Response::json([
            'status' => HttpResponse::HTTP_BAD_REQUEST,
            'title' => $message
        ], HttpResponse::HTTP_BAD_REQUEST);
    }

    /**
     * Get a question without duplicate
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Candidate $candidate)
    {
        // Get all question that this caidiate has done
        if (!$candidate) {
            return $this->badRequest('Candidate id is valid');
        }
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
    public function store(Request $request)
    {
        //
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
