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
    justify-content: space-between;
    align-items: flex-end;
    z-index: 3;
    margin-bottom: 2rem;
    width: 100%;
    padding: 2rem;
  }

  .nav-contents .socials {
    text-align: right;
    margin-bottom: 30px;
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
      font-size: 25px;
    }

    a {
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 20px;
      color: #fff;
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
