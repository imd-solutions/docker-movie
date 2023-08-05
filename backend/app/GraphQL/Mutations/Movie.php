<?php

namespace App\GraphQL\Mutations;


use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;
use App\Models\Movie as MovieModel;

class Movie
{
    /**
     * Function Case: Create a new movie quote.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param mixed[] $args The arguments that were passed into the field.
     * @param \Nuwave\Lighthouse\Support\Contracts\GraphQLContext $context Arbitrary data that is shared between all fields of a single query.
     * @param \GraphQL\Type\Definition\ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     */

    public function create($rootValue, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {
        return $this->addToDatabase($args['input']);
    }
    /**
     * Function Case: Create movies from the API endpoint.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param mixed[] $args The arguments that were passed into the field.
     * @param \Nuwave\Lighthouse\Support\Contracts\GraphQLContext $context Arbitrary data that is shared between all fields of a single query.
     * @param \GraphQL\Type\Definition\ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     * @return mixed
     */

    public function apiCreate($rootValue, array $args)
    {
        $movies = [];

        foreach($args['input'] as $input) {
            $movies[] = $this->addToDatabase($input);

        }

        return $movies;
    }

    private function addToDatabase($input)
    {
        return MovieModel::create($input);
    }
}
