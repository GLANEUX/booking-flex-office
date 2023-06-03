<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Reservation
 * 
 * @property int $idreservation
 * @property Carbon $date
 * @property int $id_user
 * @property int $id_place
 * @property bool $h1
 * @property bool $h2
 * @property bool $h3
 * @property bool $h4
 * @property bool $journee
 * 
 * @property Place $place
 * @property User $user
 *
 * @package App\Models
 */
class Reservation extends Model
{
	protected $table = 'reservation';
	protected $primaryKey = 'idreservation';
	public $timestamps = false;

	protected $casts = [
		'date' => 'datetime',
		'id_user' => 'int',
		'id_place' => 'int',
		'h1' => 'bool',
		'h2' => 'bool',
		'h3' => 'bool',
		'h4' => 'bool',
		'journee' => 'bool'
	];

	protected $fillable = [
		'date',
		'id_user',
		'id_place',
		'h1',
		'h2',
		'h3',
		'h4',
		'journee'
	];

	public function place()
	{
		return $this->belongsTo(Place::class, 'id_place');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}