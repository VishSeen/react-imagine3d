import { gql } from '@apollo/client';

const PROJECT_ITEM_BY_SLUG_QUERY = gql`
  query GetProjectItemBySlug($slug: String!) {
    projectItemCollection(where: { slug: $slug }) {
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

export default PROJECT_ITEM_BY_SLUG_QUERY;
