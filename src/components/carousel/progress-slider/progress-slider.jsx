import React, {useState} from "react";
import StyledProgressSlider from './style';

const ProgressSlider = ({
    numSlides,
    currentSlide
}) => {
    let widthPerc = 100 % Number(numSlides);
    console.log(widthPerc);
    const [width, setWidth] = useState(widthPerc);

    return (
        <StyledProgressSlider className="progress-slider">
            <div className="number slide-current">
                {currentSlide}
            </div>

            <div className="progress-bar">
                <div className="rectangle" style={{ width: `${width}%`}}></div>
                <div className="background"></div>
            </div>

            <div className="number slide-total">
                {numSlides}
            </div>
        </StyledProgressSlider>
    )
}


export default ProgressSlider;