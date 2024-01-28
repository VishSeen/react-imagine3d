import React from "react";
import StyledNav from "./style"


const NavBar = ({isOpened}) => {
    return(
        <StyledNav className={`nav-bar ${isOpened ? 'menu-opened' : ''}`}>
            <img />


            <span>NAVIGATION</span>

        </StyledNav>
    )
}


export default NavBar;