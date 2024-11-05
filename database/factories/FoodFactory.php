<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FoodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $discount = [5, 7, 10, 13, 30, null ]; $dis_unit = ['precent','manat'];
        $rand = rand(0,5);
        $discount_var = $discount[$rand];
        $discount_unit = $rand == 5 ? null : $dis_unit[rand(0,1)] ; 


         // category_id
         static $count = 0;
         $count = ($count +1 ) % 10;
         // Categoryy_id

         $langs = current_langs();   $arr = [];
        foreach ($langs as $key => $value) 
            $arr[$value] = $value.'  //  '.$this->faker->text(rand(10, 50));

        return [
            'name'=> $arr,
            "category_id" => $count == 0 ? 10 : $count,
            'discount' =>  $discount_var,
            'discount_unit' => $discount_unit
        ];
    }
}
