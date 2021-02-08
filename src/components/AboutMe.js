import React, { useState, useEffect } from 'react';
import { personal } from '../data/personal';
import Tidbit from './Tidbit';

const AboutMe = () => {
  const [descr, setDescr] = useState('');
  const showTidbitDescription = id => {
    setDescr(personal[id].description);
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
    observer.observe(document.querySelector('.tidbits'));
  });

  return (
    <div>
      <h3>Here's some things about me:</h3>
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
