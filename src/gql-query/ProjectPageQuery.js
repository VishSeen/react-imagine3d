import { gql } from '@apollo/client'

const PROJECT_PAGE_QUERY = gql`
    query ProjectQuery {
        projectPage(id: "7k0P0ZDVFmRVUlJ8OuKw7B") {
            title
        }
    }
`;

export default PROJECT_PAGE_QUERY;