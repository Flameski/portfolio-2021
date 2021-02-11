import React from 'react';

const Home = ({ isBg }) => {
  if (isBg) {
    return (
      <div className="home" id="top">
        <h1>Здравейте</h1>
      </div>
    );
  } else {
    return (
      <div className="home">
        <h1>Hello</h1>
      </div>
    );
  }
};

export default Home;
