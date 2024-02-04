import React from "react"
import StyledBottomBar from "./style";
import config from '../../../config.json';

const BottomBar = ({
    emailTxt,
    emailAddress,
    emailIcon,
    socialsTxt,
    socialsIcon,
    socials
}) => {
    return (
        <StyledBottomBar className="bottom-bar">
            <div className="bottom-bar__email">
                <a href={`mailto:${emailAddress}`}>
                    <div className="icon">
                        <span className={config?.icons}>{emailIcon}</span>
                    </div>

                    <div className="text">
                        <span>
                            {emailTxt}
                        </span>

                        <span>
                            {emailTxt}
                        </span>
                    </div>
                </a>
            </div>


            <div className="bottom-bar__socials">
                <div className="socials__text">
                    <div className="text">
                        <span>
                            {socialsTxt}
                        </span>
                    </div>

                    <div className="icon">
                        <span className={config?.icons}>
                            {socialsIcon}
                        </span>
                    </div>
                </div>

                <div className="socials__icons">
                    <span className={config?.icons}>
                        mail
                    </span>

                    <span className={config?.icons}>
                        mail
                    </span>

                    <span className={config?.icons}>
                        mail
                    </span>
                </div>
            </div>
        </StyledBottomBar>
    )
}


export default BottomBar;