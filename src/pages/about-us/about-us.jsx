import React from "react";
import Title from "../../components/title/title";

const AboutUs = () => {
    return(
        <>
            <Title text="ABOUT " />

            <main style={{
                position: "relative",
                top: "10rem",
                left: "2rem"}}>
                    <h1 style={{
                        fontFamily: 'Syne',
                        fontWeight: "600",
                        fontSize: '4rem',
                        textAlign: "left"}}
                    >
                        Capturing Elegance, <br /> Creating Atmosphere
                    </h1>
            </main>
        </>
    )
}

export default AboutUs;