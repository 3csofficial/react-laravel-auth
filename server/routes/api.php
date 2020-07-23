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


Route::group(['namespace' => 'API'], function () {
	
    Route::post('authenticate', 'UserController@authenticate');
    Route::post('register', 'UserController@register');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'UserController@logout');
        Route::get('user', 'UserController@getAuthenticatedUser');
    });
});