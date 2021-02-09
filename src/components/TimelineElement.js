import React from 'react';

const TimelineElement = ({ item }) => {
  return (
    <>
      <div className="timeline-element">
        <div className="subject">{item.subject}</div>
        <div className="angle"></div>
        <div className="under"></div>
        <div className={item.class}></div>
      </div>
    </>
  );
};

export default TimelineElement;
