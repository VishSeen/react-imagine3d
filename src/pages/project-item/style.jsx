import styled from 'styled-components';

export const StyledProjectItem = styled.div`
  .section-scroll {
    height: 100vh;
  }
  .container {
    padding: 8rem 0;
    margin: 2rem;
        h2 {
        margin-bottom: 30px;
    }
  }

  .slides {
    margin-top: 5rem;

    .slick-slide {
      padding: 0 15px;
    }

    .slick-list {
      margin: 0;
    }

    .slick-image-wrapper {
      img {
        width: 100%;
      }
    }
  }
`;

export const StyledProjectHero = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .project-item {
    &-hero {
      position: relative;

      &-image {
        display: flex;

        &::before {
          position: absolute;
          display: block;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: #040404;
          opacity: 0.5;
        }
      }

      &-title {
        position: absolute;
        top: 0;
        width: 100%;
        align-items: center;
        height: 100vh;
        display: flex;

        h1 {
          font-size: 84px;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          margin: 0 2rem;
        }
      }
    }
  }
`;

export const StyledProjectAbout = styled.div`
  margin: 2rem;
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  min-height: 300px;
  text-align: center;

  p {
    width: 55%;
  }
`;
