import styled from 'styled-components';

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 90; /* Below TopBar (99) */
  overflow: hidden;

  /* Wipe-down reveal effect */
  background: #0a0a0a;
  clip-path: circle(0% at 95% 5%); /* Start from menu button */
  visibility: hidden;
  transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1), visibility 0.8s;
  pointer-events: none;

  &.menu-opened {
    visibility: visible;
    pointer-events: all;
    clip-path: circle(150% at 95% 5%); /* Reveal entire screen */
  }

  /* Decorative Top Line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #fd5a1e;
    z-index: 101;
  }

  /*
   * Main Layout Area
   */
  .nav-contents {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2; /* Above the big background text */

    /* Desktop: Split Screen Logic */
    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 2fr 1.2fr; /* Menu (Wide) | Info (Narrow) */
    }
  }

  /*
   * Left Panel: Navigation Links
   */
  .menu {
    flex: 1; /* Grow on mobile */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center links vertically */
    padding: 2rem;
    padding-top: 6rem; /* Space for close button area */

    @media screen and (min-width: 1024px) {
      padding: 0 0 0 10vw; /* Indent dramatically on desktop */
      padding-top: 0;
      border-right: 1px solid rgba(255, 255, 255, 0.05); /* Subtle border */
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem; /* Nice spacing */
    }
  }

  /*
   * Right Panel: Socials & Info
   */
  .socials {
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background: #0f0f0f; /* Slightly lighter background */

    /* Mobile: sit at bottom */
    margin-top: auto;

    /* Desktop: Sidebar */
    @media screen and (min-width: 1024px) {
      border-top: none;
      margin-top: 0;
      justify-content: flex-end; /* Align content to bottom */
      padding: 4rem 4rem 6rem;
      background: #0d0d0d;
      height: 100%;
    }

    .socials-label {
      font-family: 'Syne', sans-serif;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #666;
      margin-bottom: 2rem;
      display: block;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-bottom: 4rem;

      li a {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: #ddd;
        text-decoration: none;
        transition: 0.3s ease;
        display: inline-block;
        padding-left: 0;

        &:hover {
          color: #fd5a1e;
          padding-left: 10px; /* Slight nudge */
        }
      }
    }

    footer {
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      color: #333;
      margin-top: auto;
      line-height: 1.6;

      a {
        color: #555;
        text-decoration: none;
        transition: color 0.3s;
        &:hover { color: #fd5a1e; }
      }
    }
  }
`;

export default StyledNav;
