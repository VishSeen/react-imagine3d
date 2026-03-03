import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #0b0b0b;
  color: #fff;
  padding: 8rem 1rem 3rem;
  margin-top: auto;
  position: relative;
  z-index: 10;
  border-top: 1px solid rgba(255,255,255,0.05);
  overflow: hidden;

  @media (min-width: 992px) {
    padding: 8rem 2rem 3rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;

    @media (min-width: 992px) {
      grid-template-columns: 2fr 1fr 1fr; /* More space for the brand statement */
    }
  }

  /* Identity / CTA */
  .brand-section {
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(40px, 6vw, 84px); /* Very Big, Bold Text */
      font-weight: 800;
      line-height: 0.9;
      margin-bottom: 3rem;
      text-transform: uppercase;
      color: #fff;
      letter-spacing: -2px;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      font-family: 'Syne', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 1rem 2.5rem;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50px; /* Pill shape */
      color: #fff;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      text-transform: uppercase;
      letter-spacing: 1px;
      background: transparent;

      &:hover {
        background: #fd5a1e; /* Brand Color */
        border-color: #fd5a1e;
        color: #fff;
        transform: translateY(-2px);
      }
    }
  }

  /* Links Column */
  .links-column {
    display: flex;
    flex-direction: column;
    padding-top: 1rem; /* Visual alignment with large text */

    h4 {
      font-family: 'Syne', sans-serif;
      font-size: 12px;
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      margin-bottom: 2rem;
      letter-spacing: 2px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 1.2rem;

        a {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          color: #aaa; /* Slightly muted default */
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;

          &:hover {
            color: #fff;
            padding-left: 10px; /* Slight nudge interaction */
          }

          /* Underline expansion on hover? Or just color change? kept simple Nudge */
        }
      }
    }
  }

  /* Bottom Bar */
  .footer-bottom {
    margin-top: 6rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      color: #444;
      margin: 0;
    }

    .socials {
      display: flex;
      gap: 2rem;

      a {
        font-family: 'Syne', sans-serif; /* Consistent font for labels */
        color: #888;
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: none;
        transition: color 0.3s ease;
        letter-spacing: 1px;
        font-weight: 600;

        &:hover {
            color: #fd5a1e;
        }
      }
    }
  }
`;

export default StyledFooter;
