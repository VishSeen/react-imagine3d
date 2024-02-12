import styled from 'styled-components'

const StyledProgressSlider = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    margin: 0 20px;
    margin-top: 3px;

    .number {
        font-size: 14px;
        font-weight: 300;
    }

    .progress-bar {
		width: 100%;
        height: 3px;
        margin: 0 15px;
        display: grid;
        grid-template-areas: "rect";

		.rectangle {
			position: relative;
            grid-area: rect;
			width: 30%;
			background-color: #ffffff;
            transition: 0.4s all ease;
            z-index: 1;
		}

        .background {
            grid-area: rect;
			width: 100%;
			background-color: #898989;
            z-index: 0;
        }
	}
`;

export default StyledProgressSlider;