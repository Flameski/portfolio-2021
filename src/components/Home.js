import React from 'react';
import linkedin from '../img/linkedin-black.png';
import github from '../img/github.png';

const Home = ({ isBg }) => {
  if (isBg) {
    return (
      <div className="home" id="top">
        <h1>Здравейте</h1>
        <p>
          Аз съм <strong>Пламен</strong> и се занимавам с уеб вече има-няма
          десет години. Досега работех с готови системи и CMS-и, но искам да
          премина на следващото ниво - да започна като Web Dev. В момента търся
          нова професионална реализация, свързана с разработката и поддръжката
          на уеб проекти, която да ми позволи да навляза в индустрията. Ако
          искате да направим нещо заедно,&nbsp;
          <a href="mailto:plamen.d@protonmail.com">свържете се с мен!</a>
        </p>
        <div className="home__links">
          <div className="home__links__link">
            <img src={linkedin} alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/plamen-d-dimitrov/">
              LinkedIn
            </a>
          </div>
          <div className="home__links__link">
            <img src={github} alt="LinkedIn" />
            <a href="https://github.com/Flameski">Github</a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home" id="top">
        <h1>Hello</h1>
        <p>
          My name is <strong>Plamen</strong> and I've been working on web
          projects for about ten years. So far I've been working with premade
          systems and CMS's, but now I want to go to the next level - to begin
          my journey as a Web Dev. I'm currently looking for new professional
          opportunities related to the development and support of web projects,
          which would allow me to step into the industry. If you want us to
          create something together,&nbsp;
          <a href="mailto:plamen.d@protonmail.com">contact me!</a>
        </p>
        <div className="home__links">
          <div className="home__links__link">
            <img src={linkedin} alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/plamen-d-dimitrov/">
              LinkedIn
            </a>
          </div>
          <div className="home__links__link">
            <img src={github} alt="LinkedIn" />
            <a href="https://github.com/Flameski">Github</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
