import React from 'react';

const ProcessCard = (props) => (
  <div className="process-card">
    <img src={props.illustration} />
    <div className="process-card-content">
      <p className="process-card-number">{props.number}</p>
      <h3 className="process-card-title">{props.title}</h3>
      <p className="process-card-description">{props.description}</p>
    </div>
  </div>
);

export default ProcessCard;