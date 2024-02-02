import React from 'react';
import NavBarItem from '../../components/nav-bar-item/nav-bar-item';
import { StyledProjects, StyledTitle } from './style';

// TODO: To delete when dynamic data will be fetched
const projectsListItems = [
  {
    title: 'SBI Mauritius Bank',
    slug: '/'
  },
  {
    title: 'Azuri Project',
    slug: '/'
  },
  {
    title: 'Mauritius Local Bank',
    slug: '/'
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
              />
            ))}
          </ul>
        </nav>
      </StyledProjects>
    </>
  );
};

export default Projects;
