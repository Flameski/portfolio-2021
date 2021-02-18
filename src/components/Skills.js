import React from 'react';
import { skills } from '../data/skills';
import { tools } from '../data/tools';
import Skill from './Skill';

const Skills = ({ isBg }) => {
  return (
    <section className="skills" id="skills">
      <h2>{isBg ? 'От какво разбирам' : 'My skills so far'}</h2>
      <div className="skills-list">
        {skills.map(skill => {
          return <Skill key={skill.id} {...skill} isBg={isBg} />;
        })}
      </div>
      <h2 id="tools">
        {isBg
          ? 'Част от инструментите, с които работя'
          : 'Some of the tools I use'}
      </h2>
      <div className="skills-list">
        {tools.map(tool => {
          return <Skill key={tool.id} {...tool} isBg={isBg} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
