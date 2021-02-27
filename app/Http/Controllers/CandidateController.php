<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class CandidateController extends Controller
{
    //
    public function index(Request $request)
    {
        $offset = $request->query('offset') ?? 0;
        $limit = $request->query('limit') ?? PHP_INT_MAX;
        $candidates = DB::table('candidates')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return Response::json([
            'status' => 200,
            'titile' => 'Get candidates',
            'items' => $candidates
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:candidates,email',
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
            'title' => 'Successfully created new candidate',
            'items' => [
                $candidate
            ]
        ], $code);
    }

    public function show(Request $request, $id)
    {
        $candidate =  Candidate::find($id);
        if (!isset($candidate)) {
            $code = HttpResponse::HTTP_NOT_FOUND;
            return Response::json([
                'status' => $code,
                'title' => 'Cannot find the candidate',
            ], $code);
        }
        $code = HttpResponse::HTTP_OK;
        return Response::json([
            'status' => $code,
            'title' => 'Get candidate with id ' . $candidate->id,
            'items' => [
                $candidate
            ]
        ], $code);
    }

    public function destroy(Candidate $candidate)
    {
        $result = $candidate->delete();
        if ($result) {
            return Response::json([
                'status' => HttpResponse::HTTP_OK,
                'title' => 'Successfully delete candidate',
            ]);
        } else {
            return Response::json([
                'status' => HttpResponse::HTTP_NOT_MODIFIED,
                'title' => 'Successfully delete candidate',
            ]);
        }
    }

    public function finish($id)
    {
        $candidate = Candidate::find($id);
        if (!$candidate) return Response::json([
            'status' => HttpResponse::HTTP_NOT_FOUND,
            'title' => 'Candidate not found'
        ], HttpResponse::HTTP_NOT_FOUND);

        return $candidate;
    }
}
