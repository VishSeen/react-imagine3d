import React from "react";
import "./styles/global.css";
import PROJECT_PAGE_QUERY from './gql-query/ProjectPageQuery'
import { useQuery } from '@apollo/client';



function App() {
    const { loading, error, data } = useQuery(PROJECT_PAGE_QUERY);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello React</h1>
            </header>

				{loading ? <p>Loading...</p> : data?.projectPage.title}
        </div>
    );
}

export default App;
