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
        $limit = 500;

        for( $i = 0; $i < $limit; $i++ ) {
            $fakeName = $faker->firstName . ' ' . $faker->lastName;
            DB::table('artists')->insert([
                'name' => $fakeName,
                'description' => $faker->realText(),
                'slug' => str_slug( $fakeName, '-' ),
                'created_at' => $faker->dateTime,
            ]);
        }
    }
}
