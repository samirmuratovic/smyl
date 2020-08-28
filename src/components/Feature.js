import React from 'react';

const Feature = (props) => (
  <div className={`feature features-wrapper-2 ${props.bgColor}`}>
    <div className="feature-left-wrapper">
      <p className={`feature-subtitle ${props.color}`}>{props.subtitle}</p>
      <h3 className={`${props.color} feature-title`}>{props.title}</h3>
      <p className={`feature-p ${props.color}`}>{props.description}</p>
    </div>
    <img className="feature-illustration" src={props.illustration} title="illustration" />
  </div>
);

export default Feature;

Feature.defaultProps = {
  reverse: '',
  
};