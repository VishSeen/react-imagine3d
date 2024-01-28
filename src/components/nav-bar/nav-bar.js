import React from "react";
import StyledNav from "./style"


const NavBar = ({isOpened}) => {
    return(
        <StyledNav className={`nav-bar ${isOpened ? 'menu-opened' : ''}`}>
            <img />


            <span>NAVIGATION</span>

            <div className="nav-contents">
                <nav className="menu">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>

                        <li>
                            <a>About</a>
                        </li>

                        <li>
                            <a>Projects</a>
                        </li>
                    </ul>
                </nav>

                <nav className="socials">
                    <h3>Socials</h3>
                    <ul>
                        <li>
                            <a>Facebook</a>
                        </li>

                        <li>
                            <a>Instagram</a>
                        </li>

                        <li>
                            <a>Behance</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </StyledNav>
    )
}


export default NavBar;