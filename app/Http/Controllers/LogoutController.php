<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    //
    public function store(Request $request)
    {
        Auth::logout();
        if (Auth::check()) {
            abort(404);
        } else {
            return view('auth.login');
        }
    }
}
