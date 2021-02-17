<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('guest:sanctum');
    }

    public function store(Request $request)
    {
        dd($request);
        // Auth::logout();
        // if (Auth::guard('sanctum')->check()) {
        //     return '123';
        // } else {
        //     // return view('auth.login');
        //     return '456';
        // }
    }
}
