import React from "react";
import StyledHeroHeader from "./style";
import carouselImage from '../../assets/LIVING ROOM - FLIP.jpg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


  const HeroHeader = () => {
    return (
      <StyledHeroHeader className="hero-header">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={2}
        >
          <Slider>
            <Slide index={0}>
              <figure>
                <picture>
                  <img src={carouselImage} />
                </picture>
                <figcaption>This is slide one</figcaption>
              </figure>
            </Slide>

            <Slide index={1}>
              <figure>
                <picture>
                  <img src={carouselImage} />
                </picture>
                <figcaption>This is slide two</figcaption>
              </figure>
            </Slide>
          </Slider>

          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </StyledHeroHeader>
    );
  }


export default HeroHeader;