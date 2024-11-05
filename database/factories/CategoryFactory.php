<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        static $image = 0;
        $image = ($image+1) % 6;

        $langs = current_langs();   $arr = [];
        foreach ($langs as $key => $value) 
            $arr[$value] = $value.'  //  '.$this->faker->text(rand(10, 50));
        
        return [
            'name'=> $arr,
            'image' => $image == 0 ? 6 .'.jpg' : $image .'.jpg',
            'is_leaf' => true,            
            'is_drink' => false
        ];
    }
}
