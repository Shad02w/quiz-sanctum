<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\OptionController;
use App\Http\Controllers\QuestionController;
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
    Route::post('/logout', [LogoutController::class, 'store']);
});
