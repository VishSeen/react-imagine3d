import { useQuery } from '@apollo/client';
import React from 'react';
import NavBarItem from '../../components/nav-bar-item/nav-bar-item';
import PROJECT_ITEMS_QUERY from '../../gql-query/ProjectItemsQuery';
import { StyledProjects, StyledTitle } from './style';
import Title from '../../components/title/title';

const Projects = () => {
  const { data } = useQuery(PROJECT_ITEMS_QUERY);
  const projectItems = data?.projectItemCollection.items;

  return (
    <>
      <StyledTitle text="Projects" />
      <StyledProjects className="project-lists">
        <nav className="projects-list-nav">
          <ul>
            {projectItems &&
              projectItems.map((item, index) => (
                <NavBarItem
                  key={index}
                  index={(index + 1).toString().padStart(2, 0)}
                  title={item.title}
                  slug={`/projects/${item.slug}`}
                  state={{ project: item }}
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
