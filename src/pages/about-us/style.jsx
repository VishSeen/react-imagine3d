import styled from 'styled-components';


const StyledAbout = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    margin: 1rem;

    @media screen and (min-width: 992px) {
      margin: 2rem;
    }

    h3 {
      font-size: 20px;
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