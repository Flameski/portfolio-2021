import React, { useEffect, useState } from 'react';

import { projects } from '../data/projects';
import ProjectNavBtn from './ProjectNavBtn';
import SingleProject from './SingleProject';

const Projects = ({ isBg }) => {
  const [displayedProjects, setDisplayedProjects] = useState([...projects]);
  const [activeNavBtn, setActiveNavBtn] = useState('ex');
  useEffect(() => {
    filterProjects('ex');
  }, []);

  let filterProjects = (type) => {
    let filteredProjects = projects
      .filter((project) => {
        return project.type === type;
      })
      .reverse();
    setDisplayedProjects(filteredProjects);
    setActiveNavBtn(type);
  };

  return (
    <section className='projects' id='projects'>
      <h2>{isBg ? 'Проекти' : 'Projects'}</h2>
      <div className='projects-nav'>
        <ProjectNavBtn
          activeNavBtn={activeNavBtn}
          id={'ex'}
          onClickFn={() => {
            filterProjects('ex');
          }}
        >
          {isBg ? 'Примерни проекти' : 'Example projects'}
        </ProjectNavBtn>
        <ProjectNavBtn
          activeNavBtn={activeNavBtn}
          id={'wr'}
          onClickFn={() => {
            filterProjects('wr');
          }}
        >
          {isBg ? 'Работни проекти' : 'Work relatеd projects'}
        </ProjectNavBtn>
        <ProjectNavBtn
          activeNavBtn={activeNavBtn}
          id={'as'}
          onClickFn={() => {
            filterProjects('as');
          }}
        >
          {isBg ? 'Разнообразни проекти' : 'Assorted projects'}
        </ProjectNavBtn>
      </div>
      {displayedProjects.map((project) => {
        return <SingleProject key={project.id} {...project} isBg={isBg} />;
      })}
    </section>
  );
};

export default Projects;
