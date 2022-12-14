<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Method get
Route::get('/animals', [AnimalController::class, 'index' ]);

// Method post
Route::post('/animals', [AnimalController::class, 'store']);

// Method Put
Route::put('/animals/{id}', [AnimalController::class, 'update']);

// Method Delete
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);

// Method Get StudentController
Route::get('/students', [StudentController::class, 'index']);

// Method Post StudentController
Route::post('/students', [StudentController::class, 'store']);

