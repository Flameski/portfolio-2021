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
          repudiandae fugit quam facilis. Minima doloremque, quis maxime ullam
          libero expedita tempora laboriosam dignissimos quidem earum inventore
          minus maiores ad enim sed ab, at placeat esse mollitia, commodi
          deleniti accusantium cupiditate in. Quam praesentium incidunt
          molestias minima laboriosam numquam, itaque cupiditate blanditiis sint
          pariatur enim recusandae adipisci quia fuga dignissimos tempora et
          amet error maxime quaerat. At cumque dolorum quo odio, autem nemo
          facere, soluta molestiae nisi aspernatur ea delectus non!
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
          repudiandae fugit quam facilis. Minima doloremque, quis maxime ullam
          libero expedita tempora laboriosam dignissimos quidem earum inventore
          minus maiores ad enim sed ab, at placeat esse mollitia, commodi
          deleniti accusantium cupiditate in. Quam praesentium incidunt
          molestias minima laboriosam numquam, itaque cupiditate blanditiis sint
          pariatur enim recusandae adipisci quia fuga dignissimos tempora et
          amet error maxime quaerat. At cumque dolorum quo odio, autem nemo
          facere, soluta molestiae nisi aspernatur ea delectus non!
        </p>
      </div>
    );
  }
};

export default Home;
