import React from 'react';

const Skill = ({ name, description, descriptionEn, isBg }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{isBg ? description : descriptionEn}</p>
    </div>
  );
};

export default Skill;
