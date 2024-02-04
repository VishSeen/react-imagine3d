import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import carouselImage from '../../assets/LIVING ROOM - FLIP.jpg';
import StyledHeroHeader from './style';

const HeroHeader = () => {
  return (
    <StyledHeroHeader className="hero-header">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={75}
        totalSlides={2}
        visibleSlides={1}
        isPlaying
        infinite
        isIntrinsicHeight
      >
        <Slider className="carousel__slider">
          <Slide
            index={0}
            className="carousel__slider__slides"
          >
            <picture>
              <img src={carouselImage} />
            </picture>
          </Slide>

          <Slide
            index={1}
            className="carousel__slider__slides"
          >
            <picture>
              <img src={carouselImage} />
            </picture>
          </Slide>
        </Slider>
      </CarouselProvider>
    </StyledHeroHeader>
  );
};

export default HeroHeader;
