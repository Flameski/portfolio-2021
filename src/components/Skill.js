import React from 'react';

const Skill = ({ name, description, descriptionEn, badge, isBg }) => {
  return (
    <div>
      <span>
        <h3>{name}</h3>
        <p>{isBg ? description : descriptionEn}</p>
      </span>
      <span>
        {badge && <img src={badge?.default} alt={`LinkedIn ${name} badge`} />}
      </span>
    </div>
  );
};

export default Skill;
