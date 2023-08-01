<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use MarvinRabe\LaravelGraphQLTest\TestGraphQL;
use Tests\Fragments;
use Tests\TestCase;

class ApplicationTest extends TestCase
{
    use RefreshDatabase, TestGraphQL, Fragments;

     /**
     * Test Case: Get the application information.
     * @test
     * @group gqlQueryUser
     * @return void
     */
    public function getApplication(){

        $response = $this->query('application', [], $this->applicationFragment());
        $response->assertJsonStructure([
            'data' => [
                'application' => [
                    'name',
                    'url'
                ]
            ]
        ]);

    $response->assertSee($this->encodeJsonResult($response['data']['application']));
    }
}
