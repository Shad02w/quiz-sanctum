<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\AnswerPaperController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\OptionController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware(['auth:sanctum'])->group(function () {

    Route::apiResource('questions', QuestionController::class);
    Route::apiResource('questions.options', OptionController::class)
        ->shallow()
        ->only(['index', 'show', 'update', 'destroy']);

    Route::apiResource('questions.answers', AnswerController::class)
        ->shallow()
        ->only(['index', 'show', 'update', 'destroy']);

    Route::post('/candidates/{candidate}/finish', [CandidateController::class, 'finish']);
    Route::apiResource('candidates', CandidateController::class);

    Route::get('/candidates/{candidate}/answerpapers/generate', [AnswerPaperController::class, 'generate']);
    Route::apiResource('candidates.answerpapers', AnswerPaperController::class)->shallow()
        ->only(['index', 'store', 'show', 'destroy']);

    Route::post('/mail', [QuizController::class, 'finished']);
    Route::delete('/sanctum/token', [TokenController::class, 'destory']);
    Route::post('/sanctum/isLogin', [TokenController::class, 'isLogin']);
    Route::post('/logout', [LogoutController::class, 'store']);
    Route::prefix('users')->group(function () {
        Route::get('/me', [UserController::class, 'Me']);
    });
});

Route::post('/sanctum/token', [TokenController::class, 'store'])->middleware('guest:sanctum');
