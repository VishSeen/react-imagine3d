import { ApolloClient, InMemoryCache } from '@apollo/client';

const contentfulSpaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const contentfulBearerToken = process.env.REACT_APP_CONTENTFUL_BEARER_TOKEN;

const Client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceId}/environments/master`,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${contentfulBearerToken}`
  }
});

export default Client;
