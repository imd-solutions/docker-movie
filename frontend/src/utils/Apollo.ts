import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';


const errorLink = onError(({ graphqlErrors}) => {
    if(graphqlErrors) {
        graphqlErrors.map(({ message}) => {
            alert(`GraphQL Error: ${message}`)
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({uri: 'http://localhost/graphql'})
])

const authLink = setContext((_, { headers }) => {
    
    let token = JSON.parse(localStorage.getItem("authUser") || "{}");
        
    return {
      headers: {
        ...headers,
        authorization: token !== undefined ? `Bearer ${token.access_token}` : "",
      }
    }
  });

const client = new ApolloClient({
link: authLink.concat(link),
cache: new InMemoryCache(),
});

export default client;