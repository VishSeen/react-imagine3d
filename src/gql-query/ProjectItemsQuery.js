import { gql } from '@apollo/client';

const PROJECT_ITEMS_QUERY = gql`
  query GetProjectItems {
    projectItemCollection {
      items {
        title
        slug
        description
        heroImage {
          url
        }
      }
    }
  }
`;

export default PROJECT_ITEMS_QUERY;
