<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name'];

	/**
	 * Get all of the genres for the artist.
	 */
	public function genres()
	{
		return $this->belongsToMany(Genre::class);
	}
}
