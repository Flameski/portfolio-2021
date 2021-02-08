import React from 'react';
import { skills } from '../data/skills';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className="skills">
      {skills.map(skill => {
        return <Skill key={skill.id} {...skill} />;
      })}
    </div>
  );
};

export default Skills;
