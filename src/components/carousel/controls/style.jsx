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
        }
        .icon {
            font-size: 28px;
        }
        .text {
            text-transform: capitalize;
        }

        &.arrow-right {
            flex-direction: row-reverse;
        }
	}
`;

export default StyledControls;