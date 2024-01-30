import React from "react";
import StyledNav from "./style"


const NavBar = ({isOpened}) => {
    return(
        <StyledNav className={`nav-bar ${isOpened ? 'menu-opened' : ''}`}>
            <img />

            <div className="title">
                <span>EXPLORE</span>
            </div>

            <div className="nav-contents">
                <nav className="menu">
                    <ul>
                        <li>
                            <span>01</span>
                            <a>Home</a>
                        </li>

                        <li>
                            <span>02</span>
                            <a>Projects</a>
                        </li>

                        <li>
                            <span>03</span>
                            <a>About us</a>
                        </li>
                    </ul>
                </nav>

                <nav className="socials">
                    <span>Socials</span>
                    <ul>
                        <li>
                            <a href="#">Facebook</a>
                        </li>

                        <li>
                            <a href="#">Instagram</a>
                        </li>

                        <li>
                            <a href="#">Behance</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </StyledNav>
    )
}


export default NavBar;