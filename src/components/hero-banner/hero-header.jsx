import React, { useRef, useState } from "react";
import StyledHeroHeader from "./style";
import BottomBar from "./bottom-bar/bottom-bar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FullWidthSlide = ({ link, title, category, img, imgAlt }) => {
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
          <img src={img} alt={imgAlt} />
        </picture>
      </div>
    </section>
  )
}


const HeroHeader = ({
  featuredItems
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef(null);

  const sliderNext = () => sliderRef?.current?.slickNext();
  const sliderPrev = () => sliderRef?.current?.slickPrev();
  const slideChanged = (oldIndex, newIndex) => setCurrentSlide(newIndex + 1);


  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnFocus: false,
    fade: true,
    beforeChange: slideChanged
  };


  return (
    <StyledHeroHeader className="hero-header">
      <Slider
        {...settings}
        ref={sliderRef}
      >
        {
          featuredItems.map((item, key) => (
            <FullWidthSlide
              key={key}
              link={`projects/${item?.slug}`}
              title={item?.title}
              category={item?.heroImageType ? 'Exterior' : 'Interior'}
              img={item?.heroImage?.url}
              imgAlt={item?.heroImage?.title}
            />
          ))
        }
      </Slider>

      <BottomBar
        emailTxt="Get in touch"
        emailIcon="mail"
        socialsTxt="Follow"
        socialsIcon="share"
        btnPrev={sliderPrev}
        btnNext={sliderNext}
        currentSlide={`0${currentSlide}`}
        totalSlides={`0${featuredItems.length}`}
      />
    </StyledHeroHeader>
  );
}


export default HeroHeader;