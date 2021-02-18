<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Option;
use App\Models\Question;
use Hamcrest\Arrays\IsArray;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isNull;

class QuestionController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = DB::table('questions')
            // ->leftJoin('options', 'questions.id', '=', 'options.question_id')
            ->leftJoin('answers', 'questions.id', '=', 'answers.question_id')
            ->select(['questions.*', 'answers.option_id AS answer_id'])
            ->get();
        $code = HttpResponse::HTTP_OK;
        return Response::json([
            'status' => $code,
            'titile' => 'Successfully create a new question set',
            'items' => $questions,
        ], $code);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'question' => 'required',
            'options' => 'array|required',
            'answer' => 'required_with:options|numeric',
            'options.*.label' => 'required',
            'options.*.content' => 'required'
        ]);

        if ($validator->fails()) {
            $code = HttpResponse::HTTP_UNPROCESSABLE_ENTITY;
            return Response::json([
                'status' => $code,
                'title' => 'Invalid request body',
                'invalidParams' => $validator->getMessageBag()
            ], $code);
        }
        $validated = $validator->validated();

        $collect = DB::transaction(function () use ($validated) {
            $question = Question::create([
                "question" => $validated['question']
            ]);

            if (is_array($validated['options']) && count($validated['options']) > 0) {
                $options  = array_map(function ($option) use ($question) {
                    return $option = Option::create([
                        "label" => $option['label'],
                        'content' => $option['content'],
                        'question_id' => $question->id
                    ]);
                }, $validated['options']);
                Answer::create([
                    "question_id" => $question->id,
                    "option_id" => $options[$validated['answer']]->id
                ]);
            }
            return $question;
        });


        $code = HttpResponse::HTTP_OK;
        return Response::json([
            'status' => $code,
            'titile' => 'Successfully create a new question set',
            'items' => [
                $collect
            ],
        ], $code);
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
        $question  = DB::table('users');
        return $question;
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
