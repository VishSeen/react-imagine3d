import styled from 'styled-components';
import Title from '../../components/title/title';

export const StyledTitle = styled(Title)`
  top: 3rem;
`;

export const StyledProjects = styled.div`
  position: absolute;
  top: 25rem;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  z-index: 3;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .project-item {
    display: grid;
    grid-template-areas: "content";
    height: 500px;
    overflow: hidden;
    align-content: center;
    align-items: center;
  }

  .project-image {
    grid-area: content;
    position: relative;
    transform: scale(1);
    height: 65%;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.2s all;
      transform: scale(1);
    }

    &:after {
      content: "";
      background-color: #000;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .project-title {
    grid-area: content;
    z-index: 2;
  }
`;
