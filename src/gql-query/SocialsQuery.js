import { gql } from '@apollo/client';

const SOCIALS_QUERY = gql`
  query GetSocials {
    socialsCollection(limit: 1) {
      items {
        title
        linksCollection {
          items {
            title
            url
            newTab
          }
        }
      }
    }
  }
`;

export default SOCIALS_QUERY;
