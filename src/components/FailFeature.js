import React from 'react';
import fail from './../../public/assets/fail.svg';

const FailFeature = (props) => (
  <div className="fail-feature">
    <img src={fail} className="fail-svg" />
    <p className="fail-feature-heading">{props.heading}</p>
    <p className="fail-feature-p">{props.description}</p>
  </div>
);

export default FailFeature;