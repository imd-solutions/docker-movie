import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


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

const client = new ApolloClient({
link: link,
cache: new InMemoryCache(),
});

export default client;