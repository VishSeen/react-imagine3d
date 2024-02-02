import React from 'react';
import NavBarItem from '../nav-bar-item/nav-bar-item';
import Title from '../title/title';
import StyledNav from './style';

const NavBar = ({ isOpened, onOpenMenu }) => {
  return (
    <StyledNav className={`nav-bar ${isOpened ? 'menu-opened' : ''}`}>
      <img />

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
          <span>Social Links</span>
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

          <footer>© 2023 Vishroy Seenarain. All rights reserved.</footer>
        </nav>
      </div>
    </StyledNav>
  );
};

export default NavBar;
