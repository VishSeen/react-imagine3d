import React from "react";
import StyledHeroHeader from "./style";
import BottomBar from "./bottom-bar/bottom-bar";

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FullWidthSlide = ({ link, title, category, image, imageMobile}) => {
    return (
      <a href="">
        <section className="slide-content">
          <div className="text">
            <div className="category">
              EXTERIOR
            </div>
            <div className="title">
              <p>
                Azuri Life ltd
              </p>
            </div>
          </div>

          <div className="image">
            <picture>
              <img src={img1} />
            </picture>
          </div>
        </section>
      </a>
    )
  }


  const HeroHeader = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <StyledHeroHeader className="hero-header">
        <Slider {...settings}>
          <FullWidthSlide
            link='#'
            title="SBI Mauritius"
            category={'exterior'}
            image={img1}
          />

          <FullWidthSlide
            link='#'
            title="Mauritius Corporation Bank"
            category={'exterior'}
            image={img2}
          />
        </Slider>

        <BottomBar
          emailTxt="Get in touch"
          emailIcon="mail"
          socialsTxt="Follow"
          socialsIcon="share"
          />
      </StyledHeroHeader>
    );
  }


export default HeroHeader;