import React from 'react';
import hranmashDesk from '../img/hranmash-desktop.jpg';
import hranmashMob from '../img/hranmash-mobile.png';
import belethorDesk from '../img/belethor-desktop.jpg';
import belethorMob from '../img/belethor-mobile.png';

const Projects = ({ isBg }) => {
  if (isBg) {
    return (
      <section className="projects" id="projects">
        <h2>Реализирани самостоятелни проекти</h2>

        <div className="single-project">
          <div>
            <img
              className="desktop"
              src={hranmashDesk}
              alt="Hranmash website desktop view"
            />
            <img
              className="mobile"
              src={hranmashMob}
              alt="Hranmash website mobile view"
            />
          </div>
          <div className="project-description">
            <h3>hranmash-bg.com</h3>
            <div className="tag">JS</div>
            <div className="tag">Bootstrap</div>
          </div>
        </div>
        <div className="single-project">
          <img
            className="desktop"
            src={belethorDesk}
            alt="Belethor website desktop view"
          />
          <img
            className="mobile"
            src={belethorMob}
            alt="Belethor website mobile view"
          />
          <div className="project-description">
            <h3>Belethor's General Goods</h3>
            <div className="tag">React</div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="projects" id="projects">
        <h2>Completed personal projects</h2>
      </section>
    );
  }
};

export default Projects;
