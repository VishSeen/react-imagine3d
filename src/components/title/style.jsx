import styled from 'styled-components';

const StyledTitle = styled.div`
  /* Center "EXPLORE" in the background */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Perfectly centered */
  z-index: 0; /* Behind everything */
  pointer-events: none; /* Non-interactive */

  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  span {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    color: #111; /* Very subtle against #0a0a0a background */
    line-height: 1;
    white-space: nowrap;

    /* Huge responsive sizing */
    font-size: clamp(60px, 20vw, 250px);
    letter-spacing: -2px;

    opacity: 0.5; /* Fade it further */
  }

  @media screen and (min-width: 992px) {
    /* Optional: Move it to bottom-right or keep refined center on desktop */
    opacity: 0.3;
  }
`;

export default StyledTitle;
