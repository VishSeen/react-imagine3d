import React, { useState } from "react";
import StyledTopBar from "./style";
import logo from '../../assets/logo/white.png';
import config from '../../config.json'


const TopBar = ({ isOpened, onOpenMenu }) => {
    return(
        <StyledTopBar className="top-bar">
            <div className="top-bar__logo">
                <img src={logo} style={{ width: '125px' }} />
            </div>

            <div className="top-bar__menu-btn" onClick={onOpenMenu}>
                <div className={`menu-txt ${isOpened ? 'opened' : ''}`}>
                    <span className="txt-menu">Menu</span>
                    <span className="txt-toggle">
                        {isOpened ? 'Close' : 'Open'}
                    </span>
                </div>
                <span className={config.icons}>
                    {isOpened ? 'close' : 'menu'}
                </span>
            </div>
        </StyledTopBar>
    )
}

export default TopBar;