import { gql } from '@apollo/client';

const SociALS_QUERY = gql`
  query GetSocials {
    projectItemCollection(limit: 20) {
      items {
        title
        slug
        projectDescription
        heroImage {
          url
        }
        exteriorViewsDescription
        exteriorViewsCollection {
          items {
            url
          }
        }
        interiorViewsDescription
        interiorViewsCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

export default PROJECT_ITEMS_QUERY;
