<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\GraphQL\Mutations\Movie;

class MovieController extends Controller
{
    public function getMovieData() {

        $response = Http::get(config('app.json'));

        $jsonData = $response->json();

        return $jsonData;
    }

    public function processMovieData() {

        $input = [];
        $data = $this->getMovieData();

        $input = [
            'input' => $data
        ];

        $movieMutation = new Movie();

        $movieMutation->apiCreate('movieApiCreate', $input);

        return $data;
    }

}
