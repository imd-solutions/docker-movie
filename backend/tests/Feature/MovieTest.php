<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\Http;
use MarvinRabe\LaravelGraphQLTest\TestGraphQL;
use Tests\Fragments;

class MovieTest extends TestCase
{
    use RefreshDatabase, TestGraphQL, Fragments;

    public function setUp(): void
    {
        parent::setUp();

    }

    /**
     * Test Case: Can add a new movie to the database via API.
     * @test
     * @group featureMovie
     * @return void
     */
    public function canAddNewMovieViaApi()
    {
        Http::fake([
            'http://192.168.1.169:4000/movie_quotes' => Http::response([
                "*" => [
                    'quote' => $this->faker->sentence,
                    'movie' => $this->faker->word,
                    'year' => $this->faker->year,
                    'image_url' => $this->faker->imageUrl,
                    'rating' => $this->faker->numberBetween(1, 5),
                    'character' => $this->faker->name
                ]
            ], 200),
        ]);

        $response = $this->json('get', '/movies')
        ->assertStatus(200)
        ->assertJsonStructure(
            [
                '*' => [
                    "quote" ,
                    "movie",
                    "year",
                    "image_url",
                    "rating",
                    "character"
                ]
            ]
        );

        $this->get('/process')
        ->assertStatus(200);

        $this->assertDatabaseCount('movies', 1);
    }
}
