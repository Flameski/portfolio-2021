import React from 'react';

const CV = ({ isBg }) => {
  if (isBg) {
    return (
      <div className="experience" id="cv">
        <h2>Моят професионален опит</h2>
      </div>
    );
  } else {
    return (
      <div className="experience" id="cv">
        <h2>My professional experience</h2>
      </div>
    );
  }
};

export default CV;
