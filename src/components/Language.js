import React from 'react';

const Language = ({ changeLang, isBg }) => {
  return (
    <div className="lang" onMouseDown={() => changeLang()}>
      {isBg ? 'EN' : 'BG'}
    </div>
  );
};

export default Language;
