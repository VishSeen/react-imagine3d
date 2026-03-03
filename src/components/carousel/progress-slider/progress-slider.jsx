import React from "react";
import StyledProgressSlider from './style';

const ProgressSlider = ({
    numSlides,
    currentSlide
}) => {
    // Convert props (which might be strings like "01") to numbers
    const current = parseInt(currentSlide, 10);
    const total = parseInt(numSlides, 10);

    // Calculate percentage width (100% / total * current)
    // Or just (current / total) * 100
    const width = total > 0 ? (current / total) * 100 : 0;

    return (
        <StyledProgressSlider className="progress-slider">
            <div className="number slide-current">
                {currentSlide}
            </div>

            <div className="progress-bar">
                <div className="rectangle" style={{ width: `${width}%` }}></div>
                <div className="background"></div>
            </div>

            <div className="number slide-total">
                {numSlides}
            </div>
        </StyledProgressSlider>
    )
}


export default ProgressSlider;