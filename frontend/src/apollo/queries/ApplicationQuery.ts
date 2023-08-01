import { gql } from '@apollo/client';

const GET_APPLICATION = gql`
  query application {
    application {
      name
    }
  }
`;

export default GET_APPLICATION;