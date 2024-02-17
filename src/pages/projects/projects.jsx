import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import NavBarItem from '../../components/nav-bar-item/nav-bar-item';
import { StyledProjects, StyledTitle } from './style';

// TODO: To delete when dynamic data will be fetched
const projectItems = [
  {
    title: 'SBI Mauritius Bank',
    slug: '/sbi-mauritius-bank',
    description: '',
    heroImage: img1,
    exteriorViews: [],
    interiorViews: []
  },
  {
    title: 'Azuri Project',
    slug: '/azuri-project',
    description: `Palmea sea view villas are a breathtaking collection of eight independent villas, located
          in the Quartier du Barachois, offering panoramic views towards the exquisite lagoon of
          Roches Noires. The perfect balance between luxury and comfort, these villas are a stunning
          addition to the region.`,
    heroImage: img2,
    exteriorViews: [],
    interiorViews: []
  },
  {
    title: 'Le Montagne',
    slug: '/le-montagne',
    description: '',
    heroImage: img1,
    exteriorViews: [],
    interiorViews: []
  }
];

const Projects = () => {
  return (
    <>
      <StyledTitle text="Projects" />
      <StyledProjects className="project-lists">
        <nav className="projects-list-nav">
          <ul>
            {projectItems.map((item, index) => (
              <NavBarItem
                key={index}
                index={(index + 1).toString().padStart(2, 0)}
                title={item.title}
                slug={`/projects${item.slug}`}
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
