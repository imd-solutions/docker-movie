import { gql } from "@apollo/client/core";
const GET_APPLICATION = gql`
  query {
    application {
      name
      version
      year
    }
  }
`;

export default GET_APPLICATION;
