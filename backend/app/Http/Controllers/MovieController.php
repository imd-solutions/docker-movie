<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\GraphQL\Mutations\Movie;

class MovieController extends Controller
{
    public function getMovieData() {

        $response = Http::get('http://192.168.1.169:4000/movie_quotes');

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
