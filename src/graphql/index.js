import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
// import resolvers from '../common/graphql';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.GRAPHQL_URL || 'http://localhost:4000/graphql',
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // local data
    // clientState: {
    //   ...resolvers,
    // },
  });
}

export default withApollo(createClient);
