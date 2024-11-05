<?php

namespace App\Http\Resources\tablet;

use App\Models\FoodIngredient;
use App\Models\Ingredient;
use App\Models\Image;

use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $imagee = Image::select('image')->whereFoodId($this->id)->first();
        $text =  null;    
        // dd(asset('tablet/foods'.$imagee->image));
        if ($imagee != null){
            if(file_exists(public_path('tablet/foods/'.$imagee->image))){
                $text = asset('tablet/foods/'.$imagee->image);
            }else{
                $text = asset('icon/No-Image.jpg');
            } 

        }

        return [
            
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'image' => $text,
            'discount' => $this->discount ?: null,
            'discount_unit' => $this->discount_unit ?: null,
            'sizes' => SizeResource::collection($this->sizes),
            'ingredients' => IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get())
        ];
    }
}
