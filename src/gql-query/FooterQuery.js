import { gql } from '@apollo/client';

const FOOTER_QUERY = gql`
  query GetFooter {
    footerCollection(limit: 1) {
      items {
        title {
          json
        }
      }
    }
  }
`;

export default FOOTER_QUERY;
