import { gql } from '@apollo/client';

const GET_APPLICATION = gql`
  query application {
    application {
      name
      version
    }
  }
`;

export default GET_APPLICATION;