import React from 'react';
import NavBarItem from '../nav-bar-item/nav-bar-item';
import Title from '../title/title';
import StyledNav from './style';
import config from '../../config.json';


const NavBar = ({ isOpened, onOpenMenu }) => {
  return (
    <StyledNav className={`nav-bar ${isOpened ? 'menu-opened' : ''}`}>

      {/* Background Title "EXPLORE" */}
      <Title text="Explore" />

      <div className="nav-contents">
        <nav className="menu">
          <ul>
            <NavBarItem
              index="01"
              title="Home"
              slug="/"
              onOpenMenu={onOpenMenu}
            />

            <NavBarItem
              index="02"
              title="Projects"
              slug="/projects"
              onOpenMenu={onOpenMenu}
            />

            <NavBarItem
              index="03"
              title="About Us"
              slug="/about-us"
              onOpenMenu={onOpenMenu}
            />
          </ul>
        </nav>

        <nav className="socials">
          <div className="contact-block">
            <span className="socials-label">Get in touch</span>
            <a href="mailto:hello@vish.studio" className="email-link">
              <span className={config.icons}>mail</span>
              <span>hello@vish.studio</span>
            </a>
          </div>

          <div className="socials-block">
            <span className="socials-label">Social Links</span>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>

              <li>
                <a href="#">Instagram</a>
              </li>

              <li>
                <a href="#">Behance</a>
              </li>
            </ul>
          </div>

          <footer>© 2023 <a href="https://www.vish.studio/" target='_blank' rel="noreferrer">VISH Studio</a>. All rights reserved.</footer>
        </nav>
      </div>
    </StyledNav>
  );
};

export default NavBar;
