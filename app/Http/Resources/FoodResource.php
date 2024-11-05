<?php

namespace App\Http\Resources;

use App\Models\FoodIngredient;
use App\Models\Ingredient;
use App\Models\Image;
use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        
        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'images' => ($this->images->isNotEmpty())? ImageResource::collection($this->images):null,
            'popupImage' =>($this->images->isNotEmpty())? ImageResourcePopup::collection($this->images) : null,
            'discount' => $this->discount ?: null,
            'discount_unit' => $this->discount_unit ?($this->discount_unit == 'manat' ? 'TMT' : '%'): null,

            'sizes' => SizeResource::collection($this->sizes),

            'ingredients' => IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get())
        ];
    }
}
