<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
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
        $response = $this->json('get', '/movies')
        ->assertStatus(200)
        ->assertJsonStructure(
            [
                '*' => [
                    "id",
                    "quote" ,
                    "movie",
                    "year",
                    "image_url",
                    "character"
                ]
            ]
        );

        $this->get('/process')
        ->assertStatus(200);

        $this->assertDatabaseCount('movies', 1);
    }
}
