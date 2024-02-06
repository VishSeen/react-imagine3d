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
      <section className="slide-content">
        <a href={link}>
          <div className="text">
            <div className="category">
              {category}
            </div>
            <div className="title">
              <p>
                {title}
              </p>
            </div>
          </div>
        </a>

        <div className="image">
          <picture>
            {/* <img src={image} media=""/> */}
            <img src={image} />
          </picture>
        </div>
      </section>
    )
  }


  const HeroHeader = () => {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    };

    return (
      <StyledHeroHeader className="hero-header">
        <Slider {...settings}>
          <FullWidthSlide
            link='#'
            title="Mauritius Corporation Bank"
            category={'exterior'}
            image={img2}
          />

          <FullWidthSlide
            link='#'
            title="SBI Mauritius"
            category={'exterior'}
            image={img1}
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