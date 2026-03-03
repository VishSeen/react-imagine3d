import { gql } from '@apollo/client';

const ABOUT_PAGE_QUERY = gql`
  query GetAboutPage {
    aboutPageCollection(limit: 1) {
      items {
        aboutDescription
        aboutInfoCardListCollection {
          items {
            ... on AboutInfoCard {
              title
              infoCardCount
            }
          }
        }
        listOfServicesCollection {
          items {
            ... on Services {
              title
              description
            }
          }
        }
        outroImage {
          url
          title
        }
      }
    }
  }
`;

export default ABOUT_PAGE_QUERY;
