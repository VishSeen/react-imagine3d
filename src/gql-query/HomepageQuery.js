import { gql } from '@apollo/client'

const HOMEPAGE_QUERY = gql`
    query HomepageQuery {
        homePageCollection{
            items {
            loadertext {
                json
            }
            }
        }
    }
`;

export default HOMEPAGE_QUERY;