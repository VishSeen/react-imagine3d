import styled from 'styled-components';

const StyledControls = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;

    .arrow {
		display: flex;
	}

	.progress-bar {
		width: 100%;
    	margin: 0 21px;
		.rectangle {
			position: relative;
			height: 3px;
			width: 100%;
			background-color: #898989;
            transition: 0.4s all ease;
			&:after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				width: 50%;
				background-color: #ffffff;
			}
		}
	}
`;

export default StyledControls;