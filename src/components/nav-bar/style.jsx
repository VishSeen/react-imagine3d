import styled from 'styled-components';

const StyledNav = styled.div`
  background: #0a0a0a;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 98;

  &.menu-opened {
    display: flex;
    align-items: flex-end;
  }

  .nav-contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 3;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 992px) {
      padding: 2rem;
      margin-bottom: 2rem;
      flex-direction: row;
      align-items: flex-end;
    }
  }

  .nav-contents .socials {
    text-align: left;
    @media screen and (min-width: 992px) {
      text-align: right;
      margin-bottom: 30px;
    }

    ul {
      margin-top: 20px;
      margin-bottom: 41px;
      li {
        padding: 5px 0;
        position: relative;
      }
    }

    span {
      font-family: 'Syne', sans-serif;
      font-weight: 600;
      font-size: 15px;

      @media screen and (min-width: 992px) {
        font-size: 25px;
      }
    }

    a {
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 15px;
      color: #fff;

      @media screen and (min-width: 992px) {
        font-size: 20px;
      }

      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: #fd5a1e;
        transition: 0.3s all ease-in-out;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;

export default StyledNav;
