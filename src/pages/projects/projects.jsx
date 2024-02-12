import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import NavBarItem from '../../components/nav-bar-item/nav-bar-item';
import { StyledProjects, StyledTitle } from './style';

// TODO: To delete when dynamic data will be fetched
const projectsListItems = [
  {
    title: 'SBI Mauritius Bank',
    slug: '/',
    image: img1
  },
  {
    title: 'Azuri Project',
    slug: '/',
    image: img2
  },
  {
    title: 'Mauritius Local Bank',
    slug: '/',
    image: img1
  }
];

const Projects = () => {
  return (
    <>
      <StyledTitle text="Projects" />
      <StyledProjects className="project-lists">
        <nav className="projects-list-nav">
          <ul>
            {projectsListItems.map((item, index) => (
              <NavBarItem
                index={(index + 1).toString().padStart(2, 0)}
                title={item.title}
                slug={item.slug}
                image={item.image}
              />
            ))}
          </ul>
        </nav>
      </StyledProjects>
    </>
  );
};

export default Projects;
