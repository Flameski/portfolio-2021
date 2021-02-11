import React from 'react';
import { skills } from '../data/skills';
import Skill from './Skill';

const Skills = ({ isBg }) => {
  return (
    <>
      <h2 id="skills">{isBg ? 'От какво разбирам' : 'My skills so far'}</h2>
      <div className="skills">
        {skills.map(skill => {
          return <Skill key={skill.id} {...skill} isBg={isBg} />;
        })}
      </div>
    </>
  );
};

export default Skills;
