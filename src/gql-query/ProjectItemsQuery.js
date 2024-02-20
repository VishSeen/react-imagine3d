import { gql } from '@apollo/client';

const PROJECT_ITEMS_QUERY = gql`
  query GetProjectItems {
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
