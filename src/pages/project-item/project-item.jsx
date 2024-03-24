import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { StyledProjectAbout, StyledProjectHero, StyledProjectItem } from './style';

import { useQuery } from '@apollo/client';
import PROJECT_ITEM_BY_SLUG_QUERY from '../../gql-query/ProjectItemBySlugQuery';
import { getRelativePath } from '../../utils/get-relative-path';

const sliderSettings = {
  arrows: false,
  centerMode: true,
  className: 'center',
  infinite: true,
  slidesToShow: 3,
  swipeToSlide: true,
  speed: 500,
  autoplay: true
};

const CommonSlider = ({ images }) => {
  return (
    <Slider {...sliderSettings}>
      {images &&
        images.map((image, index) => (
          <div
            key={index}
            className="slick-image-wrapper"
          >
            <img
              src={image.url}
              alt="Slider"
            />
          </div>
        ))}
    </Slider>
  );
};

const HeroSection = ({ heroImage, title }) => {
  return (
    <StyledProjectHero>
      <div className="project-item-hero">
        <div className="project-item-hero-image">
          <img
            src={heroImage}
            alt="Hero project"
          />
        </div>
        <div className="project-item-hero-title">
          <h1>{title}</h1>
        </div>
      </div>
    </StyledProjectHero>
  );
};

const AboutSection = ({ description }) => {
  return (
    <StyledProjectAbout className="block-text-about">
      <h2>About the project</h2>
      <p>{description}</p>
    </StyledProjectAbout>
  );
};

const InteriorSection = ({ description, images }) => {
  return (
    <div className="container">
      <h2>Interior</h2>
      <p>{description}</p>
      <div className="slides">
        <CommonSlider images={images} />
      </div>
    </div>
  );
};

const ExteriorSection = ({ description, images }) => {
  return (
    <div className="container">
      <h2>Exterior</h2>
      <p>{description}</p>
      <div className="slides">
        <CommonSlider images={images} />
      </div>
    </div>
  );
};

const ProjectItem = () => {
  const location = useLocation();
  const [project, setProject] = useState(null);

  const currentProjectSlug = getRelativePath(location.pathname, '/projects/');
  const { data } = useQuery(PROJECT_ITEM_BY_SLUG_QUERY, {
    variables: { slug: currentProjectSlug },
    skip: !!location.state && !!location.state.project
  });

  useEffect(() => {
    // If the state is null, e.g, we are navigating directly to the route
    // We ask Contentful to fetch the project by its slug
    if (!location.state || !location.state.project) {
      data && setProject(data.projectItemCollection.items[0]);
    } else {
      setProject(location.state.project);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, data]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <StyledProjectItem>
          <HeroSection
            heroImage={project.heroImage.url}
            title={project.title}
          />
          <AboutSection description={project.projectDescription} />
          <InteriorSection
            description={project.interiorViewsDescription}
            images={project.interiorViewsCollection.items}
          />
          <ExteriorSection
            description={project.exteriorViewsDescription}
            images={project.exteriorViewsCollection.items}
          />
        {/* </div> */}
      </StyledProjectItem>
    </>
  );
};

export default ProjectItem;
