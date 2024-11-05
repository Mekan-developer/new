<?php

namespace App\Http\Resources\v3;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResourceAll extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $food_query = $this->foods()->whereIsActive(true);
        $foodCount = $food_query->count();

        $data = [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'image' => $this->getImage(),
        ]; 
        if($foodCount > 0){
            $data["foods"] = FoodResource::collection($food_query->orderBy('order')->get());
        }else{
            $data["foods"] = null;
        }
            
        return $data;

    }
}
