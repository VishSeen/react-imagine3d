import styled from 'styled-components';

export const StyledProjectItem = styled.div`
  position: relative;
  margin: 2rem;
  top: 5rem;

  h2 {
    font-family: 'Syne', sans-serif;
  }

  .container {
    padding: 4rem 0;
  }

  .slides {
    margin-top: 2rem;

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
          opacity: 0.3;
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
  padding: 9rem 0;
  display: flex;
  align-items: center;
  gap: 3rem;
  min-height: 300px;

  p {
    flex: 1;
  }
`;
