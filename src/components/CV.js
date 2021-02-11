import React from 'react';

const CV = ({ isBg }) => {
  if (isBg) {
    return (
      <>
        <h2 id="cv">Моят професионален опит</h2>
      </>
    );
  } else {
    return (
      <>
        <h2 id="cv">My professional experience</h2>
      </>
    );
  }
};

export default CV;
