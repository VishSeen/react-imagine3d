import styled from 'styled-components';

export const StyledProjectItem = styled.div`
  background: #0b0b0b;
  color: #fff;
  min-height: 100vh;

  .section-divider {
    width: 60px;
    height: 2px;
    background: rgba(255,255,255,0.08);
    margin: 0 auto;
  }

  .container {
    margin: 0 auto;
    padding: 100px 1rem;

    @media (min-width: 992px) {
      padding: 140px 2rem;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;

      .section-tag {
        font-family: 'Syne', sans-serif;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: #fd5a1e;
        white-space: nowrap;
      }

      .section-line {
        flex: 1;
        height: 1px;
        background: rgba(255,255,255,0.06);
      }
    }

    h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: -2px;
      margin-bottom: 24px;
      line-height: 0.9;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.05rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.5);
      max-width: 700px;
    }
  }

  .slides {
    margin-top: 60px;

    .slick-slide {
      padding: 0 12px;
      transition: opacity 0.6s ease, transform 0.6s ease;
      opacity: 0.4;

      &.slick-active {
        opacity: 1;
      }
    }

    .slick-list {
      margin: 0 -12px;
    }

    .slick-image-wrapper {
      border-radius: 24px;
      overflow: hidden;
      aspect-ratio: 16 / 10;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .slick-dots {
      bottom: -50px;

      li button:before {
        color: rgba(255,255,255,0.3);
        font-size: 8px;
      }
      li.slick-active button:before {
        color: #fd5a1e;
      }
    }
  }
`;

export const StyledProjectHero = styled.div`
  margin: 0 auto;
  padding: 140px 1rem 60px;

  @media (min-width: 992px) {
    padding: 180px 2rem 80px;
  }

  .hero-inner {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  /* Compact breadcrumb-style top bar */
  .hero-top-bar {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      color: rgba(255,255,255,0.35);
      text-decoration: none;
      transition: color 0.3s ease;
      letter-spacing: 0.5px;

      &:hover {
        color: #fd5a1e;
      }
    }

    .breadcrumb-sep {
      color: rgba(255,255,255,0.15);
      font-size: 12px;
    }

    .breadcrumb-current {
      font-family: 'Poppins', sans-serif;
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      letter-spacing: 0.5px;
    }
  }

  /* Compact title — not massive like LP hero */
  .hero-title {
    h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.5rem, 7vw, 5rem);
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: -3px;
      line-height: 0.85;
      color: #fff;
      margin: 0;
    }
  }

  /* Compact hero image with rounded corners */
  .hero-image {
    width: 100%;
    aspect-ratio: 21 / 9;
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);

    @media (min-width: 768px) {
      border-radius: 36px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        transparent 50%,
        rgba(11, 11, 11, 0.6) 100%
      );
      pointer-events: none;
    }
  }

  /* Meta info row under the image */
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding-top: 10px;

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .meta-label {
        font-family: 'Syne', sans-serif;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: rgba(255,255,255,0.25);
      }

      .meta-value {
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        color: rgba(255,255,255,0.7);
        font-weight: 400;
      }
    }
  }
`;

export const StyledProjectAbout = styled.div`
  margin: 0 auto;
  padding: 80px 1rem 100px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 992px) {
    padding: 100px 2rem 120px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 280px 1fr;
    gap: 80px;
  }

  .about-label {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .label-tag {
      font-family: 'Syne', sans-serif;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #fd5a1e;
    }

    .label-line {
      width: 40px;
      height: 2px;
      background: rgba(255,255,255,0.08);
    }
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -1px;
    line-height: 1;
    color: #fff;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1rem, 1.3vw, 1.2rem);
    line-height: 1.8;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
  }
`;
