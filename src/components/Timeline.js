import React from 'react';
import TimelineElement from './TimelineElement';
import { learning } from '../data/learning';

const Timeline = () => {
  const sortedLearning = learning.sort((a, b) => {
    if (a.class < b.class) {
      return 1;
    } else {
      return -1;
    } // за да не се занимавам в learning.js да ги преподреждам всеки път, когато добавя нещо ново, сортирам масива по class
  });
  return (
    <div className="timeline" id="training">
      {sortedLearning.map(item => {
        return <TimelineElement key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Timeline;
