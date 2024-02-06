import React from "react";
import StyledLogo from './style';

const Logo = ({
    link,
    text,
    img
}) => {
    return(
        <StyledLogo className="logo">
            <a href={link}>
                <img src={img} alt={img} style={{ width: '125px' }} />
            </a>
        </StyledLogo>
    )
}

export default Logo;