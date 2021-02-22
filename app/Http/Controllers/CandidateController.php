<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use League\CommonMark\Inline\Element\Code;

class CandidateController extends Controller
{
    //
    public function index(Request $request)
    {
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'state' => 'required'
        ]);
        if ($validator->fails()) {
            $code = HttpResponse::HTTP_BAD_REQUEST;
            return Response::json([
                'status' => $code,
                'title' => 'Invalid request body',
                'invalidParams' => $validator->getMessageBag()
            ], $code);
        }
        $candidate = Candidate::create($request->only(['email', 'state']));
        $code = HttpResponse::HTTP_OK;
        return Response::json([
            'status' => $code,
            'title' => 'Successfully created new candidates',
            'items' => [
                $candidate
            ]
        ], $code);
    }

    public function show(Request $request, Candidate $candidate)
    {
    }
    public function destroy(Candidate $candidate)
    {
    }
}
