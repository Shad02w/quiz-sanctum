<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function Me()
    {
        $user = Auth::user();
        if (!isset($user)) {
            $code = HttpResponse::HTTP_NOT_FOUND;
            return Response::json([
                'status' => $code,
                'title' => 'No user found'
            ], $code);
        }
        return Response::json([
            'status' => 200,
            'title' => 'Info of user',
            'items' => [
                $user
            ]
        ]);
    }
}
