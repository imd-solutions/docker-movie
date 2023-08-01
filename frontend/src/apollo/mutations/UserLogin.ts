import { gql } from '@apollo/client';


const USER_LOGIN = gql`
  mutation login ($input: LoginInput) {
    login (input: $input) {
      access_token
      user {
        name
      }
    }
  }
`;

export default USER_LOGIN;