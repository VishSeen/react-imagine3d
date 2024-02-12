import React, { useRef, useState } from "react";
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
    const [currentSlide, setCurrentSlide] = useState(1);
    let sliderRef = useRef('null');

    const totalSlides = 5;

    const sliderNext = () => sliderRef.slickNext();
    const sliderPrev = () => sliderRef.slickPrev();
    const slideChanged = () => setCurrentSlide(prevValue => prevValue < 5 ? prevValue + 1 : 1)

    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


    return (
      <StyledHeroHeader className="hero-header">
        <Slider
            {...settings}
            ref={slider => {
                sliderRef = slider;
            }}
            afterChange={slideChanged}
        >
          <FullWidthSlide
            link='#'
            title="Mauritius Corporation Bank"
            category={'exterior'}
            image={img2}
          />

          <FullWidthSlide
            link='#'
            title="SBI Mauritius"
            category={'interior'}
            image={img1}
          />
        </Slider>

        <BottomBar
            emailTxt="Get in touch"
            emailIcon="mail"
            socialsTxt="Follow"
            socialsIcon="share"
            btnPrev={sliderPrev}
            btnNext={sliderNext}
            currentSlide={`0${currentSlide}`}
            totalSlides={`0${totalSlides}`}
          />
      </StyledHeroHeader>
    );
  }


export default HeroHeader;