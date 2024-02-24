import styled from 'styled-components';

export const StyledItem = styled.li`
  position: relative;

  &::after {
    transition: 0.5s all ease-in;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
  }

  a::after {
    content: ' ';
    width: 0;
    height: 2px;
    background-color: #fd5a1e;
    position: absolute;
    bottom: 5rem;
    margin-left: 15px;
    transition: 0.2s all ease-in;
  }

  &:hover {
    a {
      letter-spacing: 3px;
    }
    a::after {
      content: ' ';
      width: 35px;
    }

    span {
      color: #ffffff;
    }

    &::after {
      background-image: url(${(props) => props.image});
      opacity: 0.5;
    }
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 12px;
    margin-right: 10px;
    color: #aeaeae;
    transition: 0.3s all ease-in-out;

    @media screen and (min-width: 992px) {
      font-size: 16px;
    }
  }

  a {
    font-weight: 600;
    font-size: 2.5rem;
    transition: 0.3s all ease-in-out;

    @media screen and (min-width: 992px) {
      font-size: 8rem;
    }
  }
`;
