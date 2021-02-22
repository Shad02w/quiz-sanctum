<?php

namespace App\Http\Controllers;

use App\Mail\QuizFinished;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response as FacadesResponse;

class QuizController extends Controller
{
    //
    public function finished(Request $request, User $user)
    {
        $email = $request->input('email');
        Mail::to($email)->send(new QuizFinished());
        return FacadesResponse::json([
            "status" => 200,
            'message' => 'Successfully send mail'
        ]);
    }
}
