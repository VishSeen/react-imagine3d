import styled from 'styled-components';

const StyledLoader = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    z-index: 99;
    background-color: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        span {
            font-weight: 300;
            font-size: 4rem;
        }
    }
`;

export default StyledLoader;