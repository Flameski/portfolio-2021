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
          десет години. Сега искам да премина на следващото ниво. В момента
          търся нова професионална реализация, свързана с разработката и
          поддръжката на уеб проекти. Ако искате да направим нещо заедно,&nbsp;
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
          projects for about ten years. Now I want to go to the next level. I'm
          currently looking for new professional opportunities related to the
          development and support of web projects. If you want us to create
          something together,&nbsp;
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
