<?php

namespace app\Http\Controllers\Panel;


use App\Services\Category\Service; 
use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public $service;

    public function __construct(Service $service)
    {
        $this->service = $service;

    }
}