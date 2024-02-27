import { gql } from '@apollo/client'

const HOMEPAGE_QUERY = gql`
    query HomepageQuery {
      homePageCollection{
        items {
          featuredProjectsCollection {
            items {
              title
              slug
              heroImageType
              heroImage {
                url
                title
              }
            }
          }
        }
      }
    }
`;

export default HOMEPAGE_QUERY;