import styled from "styled-components";

const StyledNav = styled.div`
background: #0a0a0a;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100vh;
display: none;

&.menu-opened {
    display: flex;
    align-items: flex-end;
}

.title {
    position: absolute;
    top: 8rem;
    z-index: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    span {
        text-align: center;
        font-size: 237px;
        font-weight: 600;
        color: #161616;
    }
}


.nav-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    margin-bottom: 2rem;
    width: 100%;
    padding: 2rem;
}


.nav-contents .menu {
    li {
        position: relative;
        a::after {
            content: " ";
            width: 0;
            height: 2px;
            background-color: #fd5a1e;
            position: absolute;
            top: 5rem;
            margin-left: 15px;
            transition: 0.2s all ease-in;
        }
    }
    li:hover {
        a {
            letter-spacing: 3px;
        }
        a::after {
            content: " ";
            width: 35px;
        }

        span {
            color: #ffffff;
        }
    }

    span {
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        margin-right: 10px;
        color: #aeaeae;
        transition: 0.3s all ease-in-out;
    }

    a {
        font-weight: 600;
        font-size: 8rem;
        transition: 0.3s all ease-in-out;
    }
}


.nav-contents .socials {
    text-align: right;

    ul {
        margin-top: 20px;
        li {
            padding: 5px 0;
            position: relative;
        }
    }

    span {
        font-family: "Syne", sans-serif;
        font-weight: 600;
        font-size: 25px;
    }

    a {
        position: relative;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 20px;
        color: #fff;
        &::after {
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: #fd5a1e;
            transition: 0.3s all ease-in-out;
        }
        &:hover {
            &::after {
                width: 100%;
            }
        }
    }
}
`;

export default StyledNav;