import React from 'react';

import { projects } from '../data/projects';
import SingleProject from './SingleProject';

const Projects = ({ isBg }) => {
  return (
    <section className="projects" id="projects">
      <h2>
        {isBg
          ? 'Реализирани самостоятелни проекти'
          : 'Completed personal projects'}
      </h2>
      {projects.map(project => {
        return <SingleProject key={project.id} {...project} isBg={isBg} />;
      })}
    </section>
  );
};

export default Projects;
