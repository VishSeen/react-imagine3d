import styled from 'styled-components';

const StyledHeroHeader = styled.div`
    width: 100%;
    height: 100%;

    picture {

        &:after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: #00000033;
        }

        img {
            width: 100%;
        }
    }


    .slick-slider {
        width: 100%;
        height: 100%;
        overflow: hidden;

        .slick-arrow {
            display: none !important;
        }

        .slick-list {
            height: 100%;
        }
    }


    .slide-container {
        position: relative;
        display: flex;
    }


    .bottom-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export default StyledHeroHeader;