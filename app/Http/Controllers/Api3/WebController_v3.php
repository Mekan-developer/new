<?php

namespace App\Http\Controllers\Api3;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Food;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\v3\FoodResource;
use App\Http\Resources\v3\CategoryResource;
use App\Http\Resources\v3\CategoryResourceAll;
// use App\Http\Resources\CategoryResource;

class WebController_v3 extends Controller
{ 
    public function categories(){
	    return CategoryResource::collection(Category::whereNull('parent_id')->orderBy('order')->get());
    }

    public function foods(){
        return CategoryResourceAll::collection(Category::whereNull('parent_id')->orderBy('order')->get()); 
    }
}
