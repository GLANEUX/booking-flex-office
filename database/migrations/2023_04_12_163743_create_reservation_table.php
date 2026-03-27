<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservation', function (Blueprint $table) {
            $table->integer('idreservation', true);
            $table->boolean('h1')->default(0);
            $table->boolean('h2')->default(0);
            $table->boolean('h3')->default(0);
            $table->boolean('h4')->default(0);
            $table->boolean('matin')->default(0);
            $table->boolean('apresmidi')->default(0);
            $table->boolean('journee')->default(0);
            $table->date('date');
            $table->timestamp('cree_le')->nullable();
            $table->integer('id_user')->index('reservation_user_fk');
            $table->integer('id_place')->index('reservation_place_fk');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservation');
    }
};
