import { gql } from '@apollo/client';

const PROJECT_ITEM_BY_SLUG_QUERY = gql`
  query GetProjectItemBySlug($slug: String!) {
    projectItemCollection(limit: 20, where: { slug: $slug }) {
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

export default PROJECT_ITEM_BY_SLUG_QUERY;
