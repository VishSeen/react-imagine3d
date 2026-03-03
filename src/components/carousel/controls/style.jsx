import styled from 'styled-components';

const StyledControls = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;

    .arrow {
		display: flex;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        background-color: transparent;
        border: none;

        span {
            color: #ffffff;
            transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .icon {
            font-size: 28px;
        }

        .text {
            text-transform: capitalize;
            margin: 0 5px;

            @media (max-width: 768px) {
                display: none;
            }
        }

        /* Hover: Color Change */
        &:hover {
            span {
                color: #fd5a1e;
            }
        }

        /* Left Arrow Hover Animation */
        &.arrow-left:hover {
            .icon {
                transform: translateX(-5px);
            }
        }

        /* Right Arrow Hover Animation */
        &.arrow-right:hover {
            .icon {
                transform: translateX(5px);
            }
        }

        &.arrow-right {
            flex-direction: row-reverse;
        }
	}
`;

export default StyledControls;