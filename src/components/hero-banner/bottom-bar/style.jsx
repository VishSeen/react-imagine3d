import styled from 'styled-components';


const StyledBottomBar = styled.div`
	position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 300;
    z-index: 20;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 1rem 1.5rem 2rem;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); /* Improve legibility on mobile */

        .bottom-bar__email,
        .bottom-bar__socials {
            display: none !important;
        }

        .bottom-bar__controls {
            width: 100% !important;
            max-width: 400px;
        }
    }


    .bottom-bar__email {
        :hover {
          .text {
            span:nth-child(1) {
              transform: translateY(-100%);
            }

            span:nth-child(2) {
              transform: translateY(0);
            }
          }
        }

        a {
            padding: 10px 0;
            display: flex;
            align-items: center;
        }

        .icon {
            margin-right: 10px;
        }

        .text {
            overflow: hidden;
            display: grid;
            grid-template-areas: 'text';
            position: relative;

            span {
              font-size: 14px;
              padding: 10px 0;
              grid-area: text;
              transition: 0.2s all ease-in-out;

              &:nth-child(2) {
                transform: translateY(100%);
              }
            }
        }
    }


	.bottom-bar__controls {
		width: 25rem;
	}


    .bottom-bar__socials {
		overflow: hidden;
		cursor: pointer;
		display: grid;
		grid-template-areas: 'content';
		&:hover {
			.socials__text {
				transform: translateY(-100%);
			}

			.socials__icons {
				transform: translateY(0);
			}
		}

		.socials__text {
			grid-area: content;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 10px 0;
			transition: 0.2s all ease-in-out;
			transform: translateY(0);

			.icon {
				margin-left: 10px;
				span {
					font-size: 20px;
				}
			}
		}

		.socials__icons {
			grid-area: content;
			padding: 20px 0;
			transition: 0.2s all ease-in-out;
			transform: translateY(100%);
			display: flex;
			align-items: center;
			gap: 2px;

			.social-abbr {
				color: #fff;
				text-decoration: none;
				font-family: 'Syne', sans-serif;
				font-size: 11px;
				font-weight: 700;
				letter-spacing: 1px;
				padding: 4px 6px;
				border: 1px solid rgba(255,255,255,0.25);
				border-radius: 4px;
				transition: all 0.2s ease;

				&:hover {
					background: #fd5a1e;
					border-color: #fd5a1e;
				}
			}
		}
    }


    .bottom-bar__socials,
    .bottom-bar__email {
		.text {
			span {
				font-size: 14px;
				padding: 10px 0;
				transition: 0.2s all ease-in-out;
			}
		}

		.icon {
			display: flex;
			align-items: center;
			span {
				font-size: 22px;
			}
		}
	}
`;

export default StyledBottomBar;