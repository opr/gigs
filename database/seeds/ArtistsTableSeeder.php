<?php

use Illuminate\Database\Seeder;

class ArtistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $limit = 33;

        for( $i = 0; $i < $limit; $i++ ) {
            DB::table('artists')->insert([
                'name' => $faker->firstName . ' ' . $faker->lastName,
                'description' => $faker->realText()
            ]);
        }
    }
}
