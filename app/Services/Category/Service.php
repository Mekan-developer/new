<?php

namespace App\Services\Category;
use App\Models\Category;


class Service
{

    public function index($request){
        
        if($request->has('q')){
            $q = $request->get('q');
            $categories = Category::where('name', 'like', '%' . $q . '%')
            ->orWhere('name', 'like', '%' . ucwords($q) . '%')->paginate(10);
            $categories->append(['q' => $q]);
            
        } else {
            $categories = Category::paginate(10);
        }
        return $categories;
    }

    public function show($category){

        if ($category->hasChildren()) {
            $foods = collect();
            foreach ($category->children as $child) {
                $foods = $foods->merge($child->foods);
            }

            $foods = CollectionHelper::paginate($foods, 1);
        } else {
            $foods = $category->foods()->paginate(1);
        }

        return $foods;
    }

    
    public function update(){

    }

    public function store(){

    }
    

}