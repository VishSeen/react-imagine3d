import styled from 'styled-components';

const StyledHeroHeader = styled.div`
    width: 100%;
    height: 100%;

    .slide-content {
        .text {
            position: absolute;
            top: 20rem;
            z-index: 10;
            margin-left: 2rem;

            .title {
                width: 75%;
                p {
                    font-family: 'Syne', sans-serif;
                    font-size: 84px;
                    font-weight: 600;
                    transition: 0.4s all ease;
                }
            }
            .category {
                text-transform: capitalize;
            }
        }


        .image picture {
            &:after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-color: #0000001d;
            }

            img {
                width: 100%;
            }
        }
    }


    .slick-slider {
        width: 100%;
        height: 100%;
        overflow: hidden;
        cursor: grab;

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

`;

export default StyledHeroHeader;