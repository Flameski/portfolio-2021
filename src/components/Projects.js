import React from 'react';
import hranmashDesk from '../img/hranmash-desktop.jpg';
import hranmashMob from '../img/hranmash-mobile.png';
import belethorDesk from '../img/belethor-desktop.jpg';
import belethorMob from '../img/belethor-mobile.png';
import portfolioDesk from '../img/portfolio-desktop.jpg';
import portfolioMob from '../img/portfolio-mobile.png';
import github from '../img/github.png';
import globe from '../img/globe.png';

const Projects = ({ isBg }) => {
  return (
    <section className="projects" id="projects">
      <h2>
        {isBg
          ? 'Реализирани самостоятелни проекти'
          : 'Completed personal projects'}
      </h2>
      <div className="single-project">
        <div className="single-project__img">
          <img
            className="desktop"
            src={portfolioDesk}
            alt="Portfolio website desktop view"
          />
          <img
            className="mobile"
            src={portfolioMob}
            alt="Portfolio website mobile view"
          />
        </div>
        <div className="project-description">
          <h3>{isBg ? 'Този сайт' : 'This website'}</h3>
          <div className="project-description__tag">SCSS</div>
          <div className="project-description__tag">React</div>
          {isBg && (
            <p>
              Този сайт е правен на React с create-react-app. Няма много сложни
              интеракции и английската версия вероятно би могла да бъде
              имплементирана по-добре, но като цяло се получи доста добре.
            </p>
          )}
          <div className="project-description__link">
            <img src={globe} alt="GitHub" />
            <a href="/">{isBg ? 'Вече сте тук' : "You're here already"}</a>
          </div>
          <div className="project-description__link">
            <img src={github} alt="GitHub" />
            <a href="https://github.com/Flameski/portfolio-2021">GitHub</a>
          </div>
        </div>
      </div>
      <div className="single-project">
        <div className="single-project__img">
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
          <div className="project-description__tag">HTML</div>
          <div className="project-description__tag">SCSS</div>
          <div className="project-description__tag">JS</div>
          <div className="project-description__tag">Bootstrap</div>
          {isBg && (
            <p>
              Сайт на реална фирма, който се използва за промотиране на бизнеса
              и набиране на клиенти. Статичен, но ползва известно количество
              custom JS за галериите.
            </p>
          )}
          <div className="project-description__link">
            <img src={globe} alt="GitHub" />
            <a href="http://hranmash-bg.com/">Link</a>
          </div>
          <div className="project-description__link">
            <img src={github} alt="GitHub" />
            <a href="https://github.com/Flameski/hranmash">GitHub</a>
          </div>
        </div>
      </div>
      <div className="single-project">
        <div className="single-project__img">
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
        </div>
        <div className="project-description">
          <h3>Belethor's General Goods</h3>
          <div className="project-description__tag">CSS</div>
          <div className="project-description__tag">React</div>
          {isBg && (
            <p>
              Малък проект just for fun. Въпреки това продуктите и количката
              работят. Ако сте играли Skyrim ще се досетите за какво става
              въпрос.
            </p>
          )}
          <div className="project-description__link">
            <img src={globe} alt="GitHub" />
            <a href="https://belethor-react.netlify.app/">Link</a>
          </div>
          <div className="project-description__link">
            <img src={github} alt="GitHub" />
            <a href="https://github.com/Flameski/belethor-react">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
