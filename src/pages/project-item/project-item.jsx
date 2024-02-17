import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { StyledProjectAbout, StyledProjectHero, StyledProjectItem } from './style';

import { useQuery } from '@apollo/client';
// TODO: Move these images out when Contentful is in place
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import PROJECT_ITEM_BY_SLUG_QUERY from '../../gql-query/ProjectItemBySlugQuery';
import { getRelativePath } from '../../utils/get-relative-path';

const sliderSettings = {
  arrows: false,
  centerMode: true,
  className: 'center',
  infinite: true,
  slidesToShow: 3,
  speed: 500
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
              src={image}
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
    <StyledProjectAbout>
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
    skip: !!location.state || !!location.state.project
  });

  useEffect(() => {
    // If the state is null, e.g, we are navigating directly to the route
    // We ask Contentful to fetch the project by its slug
    if (!location.state || !location.state.project) {
      setProject(data.projectItemCollection.items[0]);
    } else {
      setProject(location.state.project);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

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
        <AboutSection description={project.description} />
        <InteriorSection
          description={'A description for interior'}
          images={[img1, img2, img1, img2, img1, img2]}
        />
        <ExteriorSection
          description={'A description for exterior'}
          images={[img1, img2, img1, img2, img1, img2]}
        />
      </StyledProjectItem>
    </>
  );
};

export default ProjectItem;
