import { gql } from '@apollo/client';

const MOVIE_VOTE = gql`
  mutation movieVote ($input: MovieVoteInput) {
    movieVote (input: $input) {
      status
      message
    }
  }
`;

export default MOVIE_VOTE;