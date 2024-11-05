<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Food extends Model
{
    use HasFactory, HasTranslations;

    protected $table = 'foods';
    protected $fillable = ['name', 'description', 'image', 'category_id', 'discount', 'discount_unit', 'is_active'];
    public $translatable = ['name'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function sizes()
    {
        return $this->hasMany(FoodSize::class);
    }

    public function ingredients()
    {
        return $this->hasMany(FoodIngredient::class);
    }

    public function orders()
    {
        return $this->hasMany(OrderItem::class, 'item_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }

    public function getImage()
    {
        
        if(file_exists(public_path('uploads/foods/' . $this->image))){
            return asset('uploads/foods/' . $this->image);
        }else{
            return null;
        }
    }

    public function getPopupImage()
    {
        
        if(file_exists(public_path('popup/foods/'.$this->image))){
            return asset('popup/foods/' . $this->image);
        }elseif (file_exists(public_path('uploads/foods/' . $this->image))) {
            return asset('uploads/foods/' . $this->image);
        }else{
            return null;
        }
    }


    public function getTabletImage()
    {
        if(file_exists(public_path('tablet/foods/' . $this->image))){
            return asset('tablet/foods/' . $this->image);
        }else{
            return null;
        }
    }


    public function arrImage() {
        $img = Image::select('image')->whereFoodId($this->id)->first();

        if(!is_null($img)){
            if(file_exists(public_path('uploads/foods/' . $img['image']))){
                return asset('uploads/foods/' . $img['image']);
            }else{
                return null;
            }
        }else{
            return null;
        }
       
    }
}
