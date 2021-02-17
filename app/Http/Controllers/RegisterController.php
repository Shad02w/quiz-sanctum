<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class RegisterController extends Controller
{
    public function __construct()
    {
        $this->middleware(['guest:sanctum']);
    }

    //
    public function index()
    {
        return view('auth.register');
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            "username" => 'required|max:255',
            "name" => 'required|max:255',
            "email" => 'required|email|max:255',
            "password" => 'required|confirmed'
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        // Auth::attempt($request->only('username', 'password'));
        Auth::login($user);

        return redirect()->route('spa');
    }
}
