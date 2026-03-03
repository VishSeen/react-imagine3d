import React from "react"
import StyledBottomBar from "./style";
import config from '../../../config.json';
import Controls from "../../carousel/controls/controls";

const BottomBar = ({
    emailTxt,
    emailAddress,
    emailIcon,
    socialsTxt,
    socialsIcon,
    socials,
    btnNext,
    btnPrev,
    currentSlide,
    totalSlides
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


            <div className="bottom-bar__controls">
                <Controls btnPrev={btnPrev} btnNext={btnNext} totalSlides={totalSlides} currentSlide={currentSlide} />
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
                    {socials.length > 0 ? (
                        socials.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target={link.newTab ? '_blank' : '_self'}
                                rel={link.newTab ? 'noopener noreferrer' : undefined}
                                className="social-abbr"
                            >
                                {link.title.slice(0, 2).toUpperCase()}
                            </a>
                        ))
                    ) : (
                        <>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-abbr">IG</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-abbr">LI</a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="social-abbr">BH</a>
                        </>
                    )}
                </div>
            </div>
        </StyledBottomBar>
    )
}


export default BottomBar;