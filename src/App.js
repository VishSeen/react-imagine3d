import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import logo from './assets/logo/white.png';
import HeroHeader from './components/hero-banner/hero-header';
import NavBar from './components/nav-bar/nav-bar';
import TopBar from './components/top-bar/top-bar';

import config from './config.json';

import PROJECT_PAGE_QUERY from './gql-query/ProjectPageQuery';

import './styles/global.css';
import './styles/test.css';

import HomePage from './pages/homepage/homepage';
import ProjectItem from './pages/project-item/project-item';
import Projects from './pages/projects/projects';
import AboutUs from './pages/about-us/about-us';

function App() {
  const { loading, error, data } = useQuery(PROJECT_PAGE_QUERY);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnClick = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
      <TopBar
        isOpened={menuOpen}
        onOpenMenu={menuBtnClick}
      />
      <Router>
        <NavBar
          isOpened={menuOpen}
          onOpenMenu={menuBtnClick}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectItem />}
          />
        </Routes>
      </Router>

      {/* {loading ? <p>Loading...</p> : data?.projectPage.title} */}

      {/* <footer>
				© 2023 Vishroy Seenarain. All rights reserved.
			</footer> */}
    </div>
  );
}

export default App;
