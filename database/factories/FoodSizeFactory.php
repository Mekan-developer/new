<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FoodSizeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $count = 0;
        $count++;

        return [
            'food_id' =>  $count,
            'price' => rand(50,5000)
        ];
    }
}
