import styled from 'styled-components';


const StyledAbout = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;

    h3 {
      font-size: 18px;
      font-family: 'Syne', sans-serif;
      font-weight: bold;
      margin-bottom: 10px;

      @media only screen and (min-width: 992px) {
        font-size: 32px;
      }
    }

    p {
      font-size: 13px;

      @media only screen and (min-width: 992px) {
        font-size: 16px;
      }
    }
`;


export default StyledAbout;