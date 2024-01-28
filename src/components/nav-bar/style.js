import styled from "styled-components";

const StyledNav = styled.div`
width: 100%;
height: 80vh;
display: none;

&.menu-opened {
    display: block;
}


.nav-contents {
    display: flex;
    justify-content: space-between;
}
`;

export default StyledNav;