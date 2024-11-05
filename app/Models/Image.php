<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';
    protected $fillable = ['image', 'food_id'];

    public $timestamps = false;

    public function food()
    {
        return $this->belongsTo(Food::class);
    }

    public function getImage()
    {
        
        if(file_exists(public_path('uploads/foods/' . $this->image)) && !is_null($this->image)){
            return asset('uploads/foods/' . $this->image);
        }else{
            return null;
        }
    }

    public function getPopupImage()
    {
        
        if(file_exists(public_path('popup/foods/'.$this->image)) && !is_null($this->image)){
            return asset('popup/foods/' . $this->image);
        }elseif (file_exists(public_path('uploads/foods/' . $this->image)) && !is_null($this->image)) {
            return asset('uploads/foods/' . $this->image);
        }else{
            return null;
        }
    }


    
}
