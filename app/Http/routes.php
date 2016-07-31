<?php

use App\Artist;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('frontpage');
});


Route::get('/api/artist/search/{search}', 'ArtistController@search');

Route::get('/artist/{slug}', 'ArtistController@slug');

Route::post('/artist', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'name' => 'required|max:255',
    ]);

    if ($validator->fails()) {
        return redirect('/')
            ->withInput()
            ->withErrors($validator);
    }

    $artist = new Artist;
    $artist->name = $request->name;
    $artist->save();

    return redirect('/');
});

Route::get('/testapi', function() {
    $uri = 'http://www.skiddle.com/api/v1/artists/?api_key=' . env('SKIDDLE_API_KEY') . '&name=a&offset=0';
    $response = \Httpful\Request::get($uri)->send();
    var_dump($response);

});
