import React from 'react';
import arrowDown from './../../public/assets/arrow-down.svg';
import Feature from './Feature';
import illustration from './../../public/assets/illustration.svg';

const Features = () => (
  <div className="features" id='features'>
    <div className="heading-wrapper">
      <h2>Skeleton of a Great Website</h2>
      <div className="subheading-wrapper">
        <p>Top Website Features</p>
        <img src={arrowDown} title="arrow down" />
      </div>
    </div>
    <div className="divider"></div>
    <div className="features-wrapper">
      <Feature
        subtitle={'Patient Reviews'}
        title={'Show Credibility'}
        description={'Captivate new patients through the experiences of your current patients. Credibility is the most critical aspect of a dental practice.'}
        illustration={illustration}
      />
      <Feature
        subtitle={'Before & After Photos'}
        title={'Show Results'}
        description={'Show off your expertise through amazing transformations. Bring in patients who want awesome results.'}
        illustration={illustration}
        reverse={'reverse'}
      />
      <Feature
        subtitle={'Appointment Booking'}
        title={'Quick & Effortless'}
        description={'Make appointment booking quick, easy, and effortless. Convert patients by offering multiple booking options.'}
        illustration={illustration}
      />
    </div>
    <div className="purple-bg">
      {/*<div className="features-wrapper purple-bg pad-top">*/}
      <Feature
        subtitle={'Patient Forms'}
        title={'Digital Convenience'}
        description={'Provide digital patient forms, saving your staff and patient precious time. Make each patient visit more convenient.'}
        illustration={illustration}
        reverse={'reverse'}
        color={'white'}
      />
      <Feature
        subtitle={'Patient Education'}
        title={'Show Expertise'}
        description={'Educate patients about the various dental procedures available today. Patients want to know their options and make insightful decisions.'}
        illustration={illustration}
        color={'white'}
      />
      <Feature
        subtitle={'Services'}
        title={'Your Toolbox'}
        description={'Inform patients about the services you offer. Patients can book their next appointment once they know that you can address their dental problem.'}
        illustration={illustration}
        color={'white'}
        reverse={'reverse'}
      />
    </div>
  </div>

);

export default Features;