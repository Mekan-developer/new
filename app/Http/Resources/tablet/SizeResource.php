<?php

namespace App\Http\Resources\tablet;

use Illuminate\Http\Resources\Json\JsonResource;

class SizeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name') ?: null,
            'price' => $this->price ? price_format($this->price) : null, 
            'discount_price' => $this->food->discount ? price_format($this->getDiscountPrice()) : null,
        ];
    }
}
