import React from "react";
import "./styles/global.css";
import PROJECT_PAGE_QUERY from './gql-query/ProjectPageQuery'
import { useQuery } from '@apollo/client';
import config from './config.json'
import logo from './assets/logo/white.png'
import './styles/test.css'


function App() {
	const { loading, error, data } = useQuery(PROJECT_PAGE_QUERY);

	return (
		<div className="App">
			<div className="top-bar">
				<div className="logo">
					<img src={logo} style={{ width: '125px' }} />
				</div>

				<p>
					<span className={config.icons}>
						menu
					</span>
				</p>
			</div>

			{loading ? <p>Loading...</p> : data?.projectPage.title}


			<footer>
				© 2023 Vishroy Seenarain. All rights reserved.
			</footer>
		</div>
	);
}

export default App;
