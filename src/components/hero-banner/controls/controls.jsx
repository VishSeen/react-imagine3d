import React from "react";
import StyledControls from "./style";
import config from '../../../config.json';

const Controls = () => {
    return(
        <StyledControls className="controls">
            <div className="arrow arrow-left">
                <span className={config?.icons}>
                    west
                </span>
            </div>

            <div className="progress-bar">
                <div className="rectangle"></div>
            </div>

            <div className="arrow arrow-right">
                <span className={config?.icons}>
                    east
                </span>
            </div>
        </StyledControls>
    )
}

export default Controls;