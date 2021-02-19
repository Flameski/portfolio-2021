import React from 'react';

const Home = ({ isBg }) => {
  if (isBg) {
    return (
      <div className="home" id="top">
        <h1>Здравейте</h1>
        <p>
          Аз съм <strong>Пламен</strong> и се занимавам с уеб вече има-няма
          десет години. Винаги търся нови, интересни проекти, за чиято
          реализация мога да помогна. В момента търся нова професионална
          реализация, свързана с разработката и поддръжката на уеб проекти. Ако
          искате да направим нещо заедно,&nbsp;
          <a href="mailto:plamen.d@protonmail.com">свържете се с мен!</a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="home" id="top">
        <h1>Hello</h1>
        <p>
          My name is <strong>Plamen</strong> and I've been working on web
          projects for about ten years. I'm always on the lookout for new and
          interesting projects that I can help turn into reality. I'm currently
          looking for new professional opportunities related to the development
          and support of web projects. If you want us to create something
          together,&nbsp;
          <a href="mailto:plamen.d@protonmail.com">contact me!</a>
        </p>
      </div>
    );
  }
};

export default Home;
