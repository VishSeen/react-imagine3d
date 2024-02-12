import React from "react";
import StyledControls from "./style";
import config from '../../../config.json';
import StyledProgressSlider from "../progress-slider/progress-slider";

const Arrow = ({
    className,
    icon,
    click,
    text
}) => {
    return(
        <button className={`arrow ${className}`} onClick={click}>
            <span className={`icon ${config?.icons}`}>
                {icon}
            </span>


            <span className="text">{text}</span>
        </button>
    )
}


const Controls = ({
    btnNext,
    btnPrev,
    totalSlides,
    currentSlide
}) => {
    return(
        <StyledControls className="controls">
            <Arrow className="arrow-left" icon="chevron_left" text="prev" click={btnPrev}/>

            <StyledProgressSlider currentSlide={currentSlide} numSlides={totalSlides} />

            <Arrow className="arrow-right" icon="chevron_right" text="next" click={btnNext} />
        </StyledControls>
    )
}

export default Controls;