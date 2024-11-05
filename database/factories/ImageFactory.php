<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $image = 0;
        $image = ($image+1) % 6;
        

         // category_id
         static $count = 0;
         $count = ($count +1 ) % 20;
         // Categoryy_id


        return [
            'image' => $image == 0 ? 6 .'.jpg' : $image .'.jpg',
            'food_id' => $count == 0 ? 20 : $count,
        ];
    }
}
