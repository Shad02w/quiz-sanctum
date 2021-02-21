<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function Me()
    {
        return Response::json([
            'status' => 200,
            'title' => 'Info of user',
            'user' => Auth::user()
        ]);
    }
}
