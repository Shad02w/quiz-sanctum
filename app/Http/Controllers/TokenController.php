<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response as FacadesResponse;
use Illuminate\Support\Facades\Validator;

class TokenController extends Controller
{

    public function store(Request $request)
    {
        $validator =  Validator::make($request->all(), [
            "username" => 'required|max:255',
            "password" => 'required',
            'device_name' => 'required'
        ]);

        if ($validator->fails()) {
            $code = Response::HTTP_BAD_REQUEST;
            return FacadesResponse::json([
                'status' => $code,
                'title' => 'Invalid request body',
                'invalidParams' => $validator->getMessageBag()
            ], $code);
        }

        $user =  User::where('username', $request->input('username'))->first();

        if (!isset($user) || !Hash::check($request->input('password'), $user->password)) {
            $code = Response::HTTP_UNAUTHORIZED;
            return FacadesResponse::json([
                'status' => $code,
                'title' => 'Invalid username or password',
            ], $code);
        }

        $token =  $user->createToken($request->device_name);

        return FacadesResponse::json([
            'status' => Response::HTTP_OK,
            'title' => 'Successfully login',
            'token' => $token->plainTextToken
        ]);
    }

    public function destory(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return FacadesResponse::json([
            'status' => Response::HTTP_OK,
            'title' => 'Token revoked'
        ]);
    }
}
