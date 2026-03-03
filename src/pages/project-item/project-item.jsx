import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
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
  speed: 600,
  autoplay: true,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, centerMode: false }
    }
  ]
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
              loading="lazy"
            />
          </div>
        ))}
    </Slider>
  );
};

const HeroSection = ({ heroImage, title }) => {
  return (
    <StyledProjectHero>
      <div className="hero-inner">
        <div className="hero-top-bar">
          <NavLink to="/projects">Works</NavLink>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{title}</span>
        </div>

        <div className="hero-title">
          <h1>{title}</h1>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt={title} />
        </div>

        <div className="hero-meta">
          <div className="meta-item">
            <span className="meta-label">Category</span>
            <span className="meta-value">Architecture</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Type</span>
            <span className="meta-value">Visualization</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Studio</span>
            <span className="meta-value">Imagine 3D</span>
          </div>
        </div>
      </div>
    </StyledProjectHero>
  );
};

const AboutSection = ({ description }) => {
  return (
    <StyledProjectAbout className="block-text-about">
      <div className="about-label">
        <span className="label-tag">About the Project</span>
        <div className="label-line" />
      </div>
      <p>{description}</p>
    </StyledProjectAbout>
  );
};

const GallerySection = ({ tag, title, description, images }) => {
  if (!images || images.length === 0) return null;
  return (
    <div className="container">
      <div className="section-header">
        <span className="section-tag">{tag}</span>
        <div className="section-line" />
      </div>
      <h2>{title}</h2>
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
    if (!location.state || !location.state.project) {
      data && setProject(data.projectItemCollection.items[0]);
    } else {
      setProject(location.state.project);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state, data]);

  if (!project) {
    return (
      <div style={{ background: '#0b0b0b', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', fontFamily: 'Syne', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>
        Loading...
      </div>
    );
  }

  return (
    <StyledProjectItem>
      <HeroSection
        heroImage={project.heroImage.url}
        title={project.title}
      />

      <div className="section-divider" />

      <AboutSection description={project.projectDescription} />

      <GallerySection
        tag="01"
        title="Interior"
        description={project.interiorViewsDescription}
        images={project.interiorViewsCollection.items}
      />

      <GallerySection
        tag="02"
        title="Exterior"
        description={project.exteriorViewsDescription}
        images={project.exteriorViewsCollection.items}
      />
    </StyledProjectItem>
  );
};

export default ProjectItem;
