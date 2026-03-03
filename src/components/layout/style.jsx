import styled from 'styled-components';

const StyledLPLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #0b0b0b; /* Deep rich black */
  color: #fff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  .page-hero {
    width: 100%;
    padding: 160px 1rem 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    z-index: 10;

    @media (min-width: 992px) {
      padding: 200px 2rem 80px;
    }

    h1 {
      font-size: clamp(4rem, 15vw, 12rem);
      font-weight: 800;
      letter-spacing: -0.05em;
      margin: 0;
      text-transform: uppercase;
      font-family: 'Syne', sans-serif;
      color: #ffffff;
      line-height: 0.8;

      /* Subtle transparency like the EXPLORE title */
      opacity: 0.9;
    }

    .hero-separator {
      width: 40px;
      height: 2px;
      background-color: #fd5a1e; /* Using the theme orange from nav */
      margin: 30px auto;
    }

    p {
      max-width: 700px;
      font-size: 1.2rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.6);
      margin: 0 auto;
      font-family: 'Poppins', sans-serif;
    }
  }

  /* Ensure footer sticks to bottom */
  .content-container {
    flex: 1;
    position: relative;
    z-index: 10;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem 100px;

    @media (min-width: 992px) {
      padding: 0 2rem 120px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledLPLayout;
