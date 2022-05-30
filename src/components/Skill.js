import React from "react";

const Skill = ({ name, description, descriptionEn, icon, badge, isBg }) => {
  return (
    <article>
      <span>
        <div>
          <img className="skill-icon" src={icon} alt={name} />
          <h3>{name}</h3>
        </div>
        <p>{isBg ? description : descriptionEn}</p>
      </span>
      <span>{badge && <img src={badge} alt={`LinkedIn ${name} badge`} />}</span>
    </article>
  );
};

export default Skill;
