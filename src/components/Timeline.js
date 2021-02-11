import React from 'react';
import TimelineElement from './TimelineElement';
import { learning } from '../data/learning';

const Timeline = () => {
  return (
    <div className="timeline" id="training">
      {learning.map(item => {
        return <TimelineElement key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Timeline;
