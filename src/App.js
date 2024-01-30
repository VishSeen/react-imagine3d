import React, { useState } from "react";
import "./styles/global.css";
import PROJECT_PAGE_QUERY from './gql-query/ProjectPageQuery'
import { useQuery } from '@apollo/client';
import config from './config.json'
import logo from './assets/logo/white.png'
import './styles/test.css'
import NavBar from "./components/nav-bar/nav-bar";


function App() {
	const { loading, error, data } = useQuery(PROJECT_PAGE_QUERY);
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="App">
			<div className="top-bar">
				<div className="logo">
					<img src={logo} style={{ width: '125px' }} />
				</div>

				<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
					<div className={`menu-txt ${menuOpen ? 'opened' : ''}`}>
						<span className="txt-menu">Menu</span>
						<span className="txt-toggle">
							{menuOpen ? 'Close' : 'Open'}
						</span>
					</div>
					<span className={config.icons}>
						{ menuOpen? 'close': 'menu' }
					</span>
				</div>
			</div>

			<NavBar isOpened={menuOpen} />

			{/* {loading ? <p>Loading...</p> : data?.projectPage.title} */}


			{/* <footer>
				© 2023 Vishroy Seenarain. All rights reserved.
			</footer> */}
		</div>
	);
}

export default App;
