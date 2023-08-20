import { gql } from '@apollo/client';

const ADD_MOVIE = gql`
  mutation movieCreate ($input: MovieInput) {
    movieCreate (input: $input) {
      id
      movie
    }
  }
`;

export default ADD_MOVIE;