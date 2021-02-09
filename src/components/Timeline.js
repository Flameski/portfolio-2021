import React from 'react';
import TimelineElement from './TimelineElement';
import { learning } from '../data/learning';

const Timeline = () => {
  return (
    <>
      {learning.map(item => {
        return (
          <TimelineElement key={item.id} item={item} len={learning.length} />
        );
      })}
    </>
  );
};

export default Timeline;
