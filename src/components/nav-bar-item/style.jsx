import styled from 'styled-components';

export const StyledItem = styled.li`
  position: relative;
  display: flex;
  align-items: baseline; /* Align text on baseline */
  padding: 0;
  margin: 0;
  cursor: pointer;

  /* Remove flex centering to allow full width clickable area */
  justify-content: flex-start;
  width: fit-content;

  /* Basic transition */
  transition: transform 0.3s ease;

  /* Index Number (01, 02...) */
  span {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #444; /* Darker than before */
    margin-right: 2rem;
    transition: color 0.3s ease, margin-right 0.3s ease;
    width: 25px;
    text-align: right;

    @media (max-width: 768px) {
      font-size: 12px;
      margin-right: 1.5rem;
    }
  }

  /* The actual link text */
  a {
    display: block;
    font-family: 'Syne', sans-serif;
    font-weight: 800;

    /* Massive responsive sizing */
    font-size: clamp(40px, 6vw, 84px);

    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    line-height: 0.9;
    letter-spacing: -2px;

    /* Outline effect for unselected state? Or just opacity? */
    /* Let's try the stroke effect - popular in modern designs */
    -webkit-text-stroke: 1px rgba(255,255,255, 0.5);
    color: transparent;

    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover, &.active {
      color: #fff; /* Fill in on hover */
      -webkit-text-stroke: 0px transparent;
      transform: translateX(20px);
    }
  }

  /*
   * Active State override if needed (NavLink usually adds .active automatically)
   * But we need to style it specifically if the user is on that page
   */

  /* Hover interaction */
  &:hover {
    span {
      color: #fd5a1e;
      margin-right: 2.5rem; /* Push text away slightly */
    }

    a {
       /* Trigger the link hover style */
       color: #fff;
       -webkit-text-stroke: 0px transparent;
       transform: translateX(20px);
    }
  }
`;
