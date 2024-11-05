<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DeletingTestData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:TestDelete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test üçin goşulan ähli maglumatlary udalit etmek';

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
        DB::table('food_ingredients')->delete();
        DB::table('food_sizes')->delete();
        DB::table('images')->delete();
        DB::table('foods')->delete();
        DB::table('categories')->delete();


        $this->info('Test üçin goşulan ähli maglumatlar üstünlikli udalit edildi');
    }
}
