<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class LoginController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware(['guest:sanctum']);
    // }

    //
    public function index()
    {
        return view('auth.login');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            "username" => 'required|max:255',
            "password" => 'required'
        ]);

        if (!Auth::attempt($request->only('username', 'password')))
            return Redirect::route('login')->with('status', 'Invalid username or password');

        return Redirect::route('spa');
    }

    public function username(): string
    {
        return 'username';
    }
}
