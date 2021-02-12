import React from 'react';
import Timeline from './Timeline';

const FuturePlans = ({ isBg }) => {
  return (
    <div>
      <h2 id="trainings">
        {isBg ? 'Какво планирам да уча' : 'My training plans'}
      </h2>
      <Timeline />
    </div>
  );
};

export default FuturePlans;
