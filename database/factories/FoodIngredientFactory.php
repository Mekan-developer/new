<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FoodIngredientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $langs = current_langs();   $arr = [];
        foreach ($langs as $key => $value) 
            $arr[$value] = $this->faker->text(rand(10, 50));
        

        return
        [
            'name'=> $arr,
            'food_id' => rand(1,20),
        ];
    }
}
