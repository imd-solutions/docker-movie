import { gql } from '@apollo/client';

const USER_CREATE = gql`
  mutation userCreate ($input: UserInput) {
    userCreate (input: $input) {
      name
    }
  }
`;

export default USER_CREATE;