import React from 'react';

const TimelineElement = ({ item, len }) => {
  return (
    <>
      <div
        className="timeline-element"
        style={{
          width: `${100 / len}%`,
        }}
      >
        <div className="subject">{item.subject}</div>
        <div className="angle"></div>
        <div className="under"></div>
        <div className={item.class}></div>
      </div>
    </>
  );
};

export default TimelineElement;
