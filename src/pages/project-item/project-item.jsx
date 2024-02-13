import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../../components/title/title';

const ProjectItem = () => {
  // Using React Router DOM use location to prevent
  // unnecessary API calls to Contentful.
  // If the state is null, we make a fetch.
  const location = useLocation();

  const [project, setProject] = useState(null);

  useEffect(() => {
    // If the state is null, e.g, we are navigating directly to the route
    if (!location.state || !location.state.project) {
      // TODO: Fetch project data from Contentful
    } else {
      setProject(location.state.project);
    }
  }, [location.state]);

  // We can as well remove this once the logic for fetch from Contentful is implemented
  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Title text={project.title} />
    </>
  );
};

export default ProjectItem;
