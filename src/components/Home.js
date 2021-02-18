import React from 'react';

const Home = ({ isBg }) => {
  if (isBg) {
    return (
      <div className="home" id="top">
        <h1>Здравейте</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          ratione eaque quo, cupiditate ipsam accusamus eum. Eaque, libero eius,
          mollitia unde laborum nobis tempora ratione, vel minus quidem ex
          repudiandae fugit quam facilis.
        </p>
      </div>
    );
  } else {
    return (
      <div className="home" id="top">
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          ratione eaque quo, cupiditate ipsam accusamus eum. Eaque, libero eius,
          mollitia unde laborum nobis tempora ratione, vel minus quidem ex
          repudiandae fugit quam facilis.
        </p>
      </div>
    );
  }
};

export default Home;
