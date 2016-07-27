<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Artist;
use App\Http\Requests;

class ArtistController extends Controller
{
    public function search(Request $request) {
	    $artists = Artist::where( 'name', 'like', $request->search . '%' )->orderBy('name', 'asc')->get();
	    return json_encode($artists);
    }
}
