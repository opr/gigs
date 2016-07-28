<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Artist;
use App\Http\Requests;

class ArtistController extends Controller
{
    public function search(Request $request) {
	    $artists = Artist::where( 'name', 'like', $request->search . '%' )->orderBy('name', 'asc')->limit(8)->get();
	    return json_encode($artists);
    }

	public function slug(Request $request) {
		$artist = Artist::where( 'slug', '=', $request->slug )->get();
		return view('artist', $artist);
	}
}
