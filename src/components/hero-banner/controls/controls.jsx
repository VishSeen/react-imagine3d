import React from "react";
import StyledControls from "./style";
import config from '../../../config.json';

const Arrow = ({
    className,
    icon,
    click
}) => {
    return(
        <button className={`arrow ${className}`} onClick={click}>
            <span className={config?.icons}>
                {icon}
            </span>
        </button>
    )
}


const Controls = ({
    arrowLeftClick,
    arrowRightClick
}) => {
    return(
        <StyledControls className="controls">
            <Arrow className="arrow-left" icon="west" click={arrowLeftClick}/>

            <div className="progress-bar">
                <div className="rectangle"></div>
            </div>

            <Arrow className="arrow-right" icon="east" click={arrowRightClick} />
        </StyledControls>
    )
}

export default Controls;