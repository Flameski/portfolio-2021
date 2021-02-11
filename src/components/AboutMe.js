import React, { useState, useEffect } from 'react';
import { personal } from '../data/personal';
import Tidbit from './Tidbit';

const AboutMe = ({ isBg }) => {
  const [descr, setDescr] = useState('');
  const showTidbitDescription = id => {
    setDescr(isBg ? personal[id].description : personal[id].descriptionEn);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (window.innerWidth < 500) {
        if (entries[0].isIntersecting) {
          document
            .querySelector('.tidbit-description')
            .classList.add('tidbit-description-mobile');
        } else {
          document
            .querySelector('.tidbit-description')
            .classList.remove('tidbit-description-mobile');
        }
      }
    });
    observer.observe(document.querySelector('.tidbits-header'));
  });

  return (
    <div>
      <h2 className="tidbits-header">
        {isBg ? 'Някои неща за мен' : "Here's some things about me:"}
      </h2>
      <div className="tidbits">
        {personal.map(item => {
          return (
            <Tidbit
              key={item.id}
              {...item}
              showTidbitDescription={showTidbitDescription}
            />
          );
        })}
      </div>
      <div className="tidbit-description">
        <p>{descr}</p>
      </div>
    </div>
  );
};

export default AboutMe;
