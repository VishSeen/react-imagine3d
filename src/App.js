import React, { useState } from "react";
import "./styles/global.css";
import PROJECT_PAGE_QUERY from './gql-query/ProjectPageQuery'
import { useQuery } from '@apollo/client';
import config from './config.json'
import logo from './assets/logo/white.png'
import './styles/test.css'
import NavBar from "./components/nav-bar/nav-bar";
import TopBar from "./components/top-bar/top-bar";
import HeroHeader from "./components/hero-banner/hero-header";


function App() {
	// const { loading, error, data } = useQuery(PROJECT_PAGE_QUERY);
	const [menuOpen, setMenuOpen] = useState(false);
    const menuBtnClick = () => setMenuOpen(!menuOpen);

	return (
		<div className="App">
            <HeroHeader />

            <TopBar isOpened={menuOpen} onOpenMenu={menuBtnClick} />

			<NavBar isOpened={menuOpen} />

			{/* {loading ? <p>Loading...</p> : data?.projectPage.title} */}


			{/* <footer>
				© 2023 Vishroy Seenarain. All rights reserved.
			</footer> */}
		</div>
	);
}

export default App;
