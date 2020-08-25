import React from 'react';

const DigitalFeature = (props) => (
  <div className="digital-feature">
    <div className="small-divider"></div>
    <h4 className="digital-feature-title">{props.title}</h4>
    <p className="digital-feature-description">{props.description}</p>
  </div>
);

export default DigitalFeature;