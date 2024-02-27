import React, { useEffect, useRef } from "react";
import StyledLoader from "./style";
import gsap from 'gsap';


const Loader = ({ logo, texts, setLoader }) => {
    let introRef = useRef(null);
    let container = useRef(null);


    const completeAnimation = () => setLoader(false);

    useEffect(() => {
        var tl = gsap.timeline({ onComplete: completeAnimation});

        tl.to(container.current, { opacity: 1, duration: 1 })
    }, [texts]);
    return (
        <StyledLoader ref={container}>
            <h1>
                {texts &&
                    texts.map((text, key) => (
                        <span
                            key={key}
                            ref={introRef}
                        >
                            {text.content[0].value} <strong>{text.content[1].value}</strong>
                        </span>
                    ))}
            </h1>
        </StyledLoader>
    );
};

export default Loader;