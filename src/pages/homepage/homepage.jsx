import React from "react";
import HeroHeader from "../../components/hero-banner/hero-header";
import StyledHomePage from "./style";

const HomePage = () => {
  return (
    <StyledHomePage className="homepage">
          <HeroHeader />
    </StyledHomePage>
  );
};

export default HomePage;
