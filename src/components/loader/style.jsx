import styled from 'styled-components';

const StyledLoader = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    z-index: 999;
    background-color: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader-logo {
        opacity: 0;

        img {
            width: 140px;

            @media screen and (min-width: 992px) {
                width: 200px;
            }
        }
    }

    .loader-progress-track {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #1e1e1e;

        .loader-progress-bar {
            height: 100%;
            width: 0%;
            background-color: #fd5a1e;
        }
    }
`;

export default StyledLoader;