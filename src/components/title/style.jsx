import styled from 'styled-components';

const StyledTitle = styled.div`
  position: fixed;
  top: 8rem;
  z-index: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  span {
    text-align: center;
    font-size: 175px;
    font-weight: 600;
    color: #161616;
  }
`;

export default StyledTitle;
