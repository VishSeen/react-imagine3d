import { ApolloClient, InMemoryCache } from '@apollo/client';

const Client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/obr0lam7iwdw/environments/master`,
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer 93urIsWeJNXPmSp3-PrRWSWZmSVloKDbJ98SDVY7SCg`
    }
});

export default Client;