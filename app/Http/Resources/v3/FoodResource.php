<?php

namespace App\Http\Resources\v3;

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
        
        $data = [
                'id' => $this->id,
                'name' => $this->getTranslations('name'),
                'images' => $this->images->isNotEmpty()? ImageResource::collection($this->images):null,
                // 'popupImage' =>$this->images->isNotEmpty()? ImageResourcePopup::collection($this->images) : null,
                'discount' => $this->discount ?: null,
                'discount_unit' => $this->discount_unit ?($this->discount_unit == 'manat' ? 'TMT' : '%'): null,
                'sizes' => $this->sizes->isNotEmpty() ? SizeResource::collection($this->sizes): null,
            ];
        
            if(FoodIngredient::whereFoodId($this->id)->count() > 0)
                $data['ingredients'] = IngredientResource::collection(FoodIngredient::whereFoodId($this->id)->get());
            else
                $data['ingredients'] = null;
            return $data;
        
    }
}
