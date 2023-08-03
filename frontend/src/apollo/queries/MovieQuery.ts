import { gql } from '@apollo/client';

const GET_MOVIES = gql`
  query movies {
    movies {
        id
        quote
        movie
        year
        image_large_url
        rating
        character
    }
  }
`;

export default GET_MOVIES;