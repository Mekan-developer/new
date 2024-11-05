<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Category;
use App\Models\Food;
use App\Models\FoodSize;
use App\Models\FoodIngredient;
use App\Models\Image;

class AddTestData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Menu-ny test etmek ucin baza maglumat yuklemek';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Category::factory(10)->create();
        Food::factory(20)->create();
        FoodSize::factory(20)->create();
        FoodIngredient::factory(40)->create();
        Image::factory(40)->create();
        


        $this->info('Test üçin 10 sany kategorya 20 sany onum üstünlikli goşuldy');
    }
}
