import styled from 'styled-components';


const StyledTopBar = styled.header`
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    z-index: 99;

    @media only screen and (min-width: 992px) {
      top: 2rem;
      left: 2rem;
      right: 2rem;
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
                &.menu-txt .txt-menu {
                    transform: translateY(-100%);
                }

                &.menu-txt .txt-toggle {
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

            .txt-menu, .txt-toggle {
              font-size: 13px;

              @media only screen and (min-width: 992px) {
                font-size: 16px;
              }
            }

            span {
                grid-area: text;
                transition: 0.2s all ease-in-out;
            }
        }
    }
`;


export default StyledTopBar;