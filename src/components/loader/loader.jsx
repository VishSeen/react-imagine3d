import React, { useEffect, useRef } from "react";
import StyledLoader from "./style";
import gsap from 'gsap';


const Loader = ({
    logo,
    texts,
    loading
}) => {
    let introRef = useRef(null)
    let container = useRef(null)
    var tl = gsap.timeline({ repeat: 30, repeatDelay: 1 });



    useEffect(() => {
        tl.to(container.current, { opacity: 1, duration: 1})
        .fromTo(introRef.current, { opacity: 0 }, { duration: 2, opacity: 1, ease: "power1.out", stagger: 1 })
        .to(introRef.current, {opacity: 0, duration: 1})
        .to(container.current, { opacity: 0, display: 'none', duration: 1, stagger: 2 })
    }, [texts])
    return (
        <StyledLoader ref={container}>
            <h1>
                <span ref={introRef}>
                    Capturing <strong>Elegance</strong>.
                </span>

                {/* <span><strong>Creating</strong> Atmosphere.</span> */}
            </h1>
        </StyledLoader>
    );
}

export default Loader;