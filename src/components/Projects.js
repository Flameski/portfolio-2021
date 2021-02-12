import React from 'react';

const Projects = ({ isBg }) => {
  if (isBg) {
    return (
      <>
        <h2 id="projects">Реализирани самостоятелни проекти</h2>
      </>
    );
  } else {
    return (
      <>
        <h2 id="projects">Completed personal projects</h2>
      </>
    );
  }
};

export default Projects;
