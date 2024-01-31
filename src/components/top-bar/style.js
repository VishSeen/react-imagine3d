import styled from 'styled-components';


const StyledTopBar = styled.div`
    position: fixed;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    z-index: 99;


    .top-bar__logo {
        width: 125px;
    }


    .top-bar__menu-btn {
            display: flex;
            align-items: center;

        &:hover {
            cursor: pointer;

            .menu-txt .txt-menu {
                transform: translateY(-100%);
            }

            .menu-txt .txt-toggle {
                transform: translateY(0);
            }
        }


        .menu-txt {
            display: grid;
            grid-template-areas: "text";
            overflow: hidden;
            margin-top: 9px;
            margin-right: 6px;
             &.opened {
                .menu-txt .txt-menu {
                    transform: translateY(-100%);
                }

                .menu-txt .txt-toggle {
                    transform: translateY(0);
                }
            }

            .txt-menu {
                transform: translateY(0);
                margin-bottom: 10px;
            }
            .txt-toggle {
                transform: translateY(100%);
            }

            span {
                grid-area: text;
                transition: 0.2s all ease-in-out;
            }
        }
    }


    .top-bar__menu-btn .menu-txt {



    }
`;


export default StyledTopBar;