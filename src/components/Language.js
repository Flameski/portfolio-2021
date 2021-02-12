import React from 'react';
import en from '../img/en.png';
import bg from '../img/bg.png';

const Language = ({ changeLang, isBg }) => {
  return (
    <div className="lang" onMouseDown={() => changeLang()}>
      <img src={isBg ? en : bg} alt="flag" />
    </div>
  );
};

export default Language;
