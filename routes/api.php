<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('API')->group(function () {
    Route::post('login', 'AuthController@login')->name('api.login');
    Route::post('register', 'AuthController@register')->name('api.register');
    Route::post('forgot-password', 'ForgotPasswordController@sendResetLinkEmail')->name('api.forgot-password');
    Route::post('reset-password', 'ResetPasswordController@reset')->name('api.reset-password');
});
