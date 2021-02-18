import React from 'react';
import Timeline from './Timeline';

const FuturePlans = ({ isBg }) => {
  return (
    <section className="trainings" id="trainings">
      <h2>{isBg ? 'Какво планирам да уча' : 'My training plans'}</h2>
      <p>
        {isBg
          ? 'Всеки трябва да учи нови неща постоянно. Ето нещата, които имам желание да разуча:'
          : 'Everyone needs to learn new things constantly. Here are the things I want to learn more about:'}
      </p>
      <div>
        <div className="legend">
          <div className="soon"></div>
          <p>{isBg ? 'в близко бъдеще' : 'soon'}</p>
          <br />
          <div className="later"></div>
          <p>{isBg ? 'малко по-нататък' : 'later'}</p>
        </div>
      </div>
      <Timeline />
    </section>
  );
};

export default FuturePlans;
