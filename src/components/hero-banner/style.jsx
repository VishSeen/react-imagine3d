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
            max-width: 100%;

            @media (max-width: 992px) {
                top: 50%;
                transform: translateY(-50%);
                margin-left: 1.5rem;
                margin-right: 1.5rem;
                width: auto;
            }

            .title {
                width: 75%;
                p {
                    font-family: 'Syne', sans-serif;
                    font-size: clamp(40px, 8vw, 84px);
                    font-weight: 600;
                    line-height: 1.1;
                    transition: 0.4s all ease;
                }

                @media (max-width: 768px) {
                    width: 90%;
                    p {
                        font-size: 42px; /* Fallback / specific adjustment */
                    }
                }
            }
            .category {
                text-transform: capitalize;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                margin-bottom: 1rem;
                opacity: 0.8;
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
                background-color: #040404;
                opacity: 0.5;
            }

            img {
                width: 100vw;
                height: 100vh;
                object-fit: cover;
                display: block;
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