import styled from 'styled-components';

const StyledLogo = styled.div`
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;

        img {
            width: 90px;
            @media only screen and (min-width: 992px) {
              width: 125px;
            }
        }
    }
`;

export default StyledLogo;