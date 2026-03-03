import React, { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import NavBarItem from '../nav-bar-item/nav-bar-item';
import Title from '../title/title';
import StyledNav from './style';
import config from '../../config.json';


const NavBar = ({ isOpened, onOpenMenu, socials = [] }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.menu ul li');
    const socPanel = el.querySelector('.socials');

    if (isOpened) {
      gsap.fromTo(items,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out', delay: 0.25 }
      );
      if (socPanel) gsap.fromTo(socPanel,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.4 }
      );
    } else {
      gsap.killTweensOf([items, socPanel]);
    }
  }, [isOpened]);

  return (
    <StyledNav ref={navRef} className={`nav-bar ${isOpened ? 'menu-opened' : ''}`}>

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
            <a href="mailto:imagine3dvisual@gmail.com" className="email-link">
              <span className="material-symbols-rounded">mail</span>
              <span>imagine3dvisual@gmail.com</span>
            </a>
            <a href="tel:+23055018008" className="email-link">
              <span className="material-symbols-rounded">call</span>
              <span>+230 5501 8008</span>
            </a>
          </div>

          <div className="socials-block">
            <span className="socials-label">Social Links</span>
            <ul>
              {socials.length > 0 ? (
                socials.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target={link.newTab ? "_blank" : "_self"}
                      rel={link.newTab ? "noreferrer" : undefined}
                    >
                      {link.title}
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Behance</a></li>
                </>
              )}
            </ul>
          </div>

          <footer>© 2023 <a href="https://www.vish.studio/" target='_blank' rel="noreferrer">VISH Studio</a>. All rights reserved.</footer>
        </nav>
      </div>
    </StyledNav>
  );
};

export default NavBar;
