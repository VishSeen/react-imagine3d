
import React, { useState, useRef, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gsap } from './utils/animations';

import NavBar from './components/nav-bar/nav-bar';
import TopBar from './components/top-bar/top-bar';

import SOCIALS_QUERY from './gql-query/SocialsQuery';
import FOOTER_QUERY from './gql-query/FooterQuery';

import './styles/global.css';
import './styles/test.css';

import HomePage from './pages/homepage/homepage';
import ProjectItem from './pages/project-item/project-item';
import Projects from './pages/projects/projects';
import AboutUs from './pages/about-us/about-us';
import Footer from './components/footer/footer';

// TODO: to add a loader screen so that when all data is received, we display the required
// page. Loader screen should contain client logo. A global state/context can be used for this.

function ConditionalFooter({ socials, footerTitle }) {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return <Footer socials={socials} titleJson={footerTitle} />;
}

function PageTransition({ children }) {
  const location = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(wrapperRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'all' }
    );
  }, [location.pathname]);

  return <div ref={wrapperRef}>{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnClick = () => setMenuOpen(!menuOpen);

  const { data: socialsData } = useQuery(SOCIALS_QUERY);
  const socials = socialsData?.socialsCollection?.items?.[0]?.linksCollection?.items || [];

  const { data: footerData } = useQuery(FOOTER_QUERY);
  const footerTitle = footerData?.footerCollection?.items?.[0]?.title?.json || null;

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
          socials={socials}
        />
        <Routes>
          <Route
            path="/"
            element={<PageTransition><HomePage /></PageTransition>}
          />
          <Route
            path="/projects"
            element={<PageTransition><Projects /></PageTransition>}
          />
          <Route
            path="/projects/:slug"
            element={<PageTransition><ProjectItem /></PageTransition>}
          />
          <Route
            path="/about-us"
            element={<PageTransition><AboutUs /></PageTransition>}
          />
        </Routes>
        <ConditionalFooter socials={socials} footerTitle={footerTitle} />
      </Router>
    </div>
  );
}

export default App;
