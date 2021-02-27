<?php

namespace App\Http\Controllers;

use App\Models\AnswerPaper;
use App\Models\Candidate;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;


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
    public function index(Request $request, $id)
    {
        $candidate = Candidate::find($id);
        if (!$candidate) return $this->notFound('Candidate not found');
        return Response::json([
            'status' => HttpResponse::HTTP_OK,
            'title' => 'Get all the answer papers belong to candidate with id ' . $candidate->id,
            'items' => $candidate->answerpaper
        ], HttpResponse::HTTP_NOT_FOUND);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $candidate = Candidate::find($id);
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
        $paper = AnswerPaper::find($id);
        if (!$paper) return $this->notFound('Answer paper not found');
        return Response::json([
            'status' => HttpResponse::HTTP_OK,
            'title' => 'Submit question answer',
            'items' => [
                $paper
            ]
        ]);
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

    public function generate($id)
    {
        $candidate_id = Candidate::find($id);
        if (!$candidate_id) return $this->notFound('Candidate not found');
        // Genarate question pool which they have not answer before
        $sql = <<<SQL
        SELECT * FROM `questions`
        WHERE `id` NOT IN (
            SELECT DISTINCT `question_id` FROM `answer_papers`
            WHERE `candidate_id` = $candidate_id
        )
        SQL;
        $questionPool =  DB::select($sql);

        $question = (empty($questionPool)) ? Question::first() : $questionPool[array_rand($questionPool)];

        return Response::json([
            'status' => HttpResponse::HTTP_OK,
            'title' => 'Get a random question',
            'items' => [
                $question
            ]
        ]);
    }
}
