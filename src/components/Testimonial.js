import React from 'react';
import testimonialImage from './../../public/assets/person@2x.png';

const Testimonial = () => (
  <div className="testimonial">
    <img src={testimonialImage} title="person" />
    <div className="testimonial-content">
      <h3 className="testimonial-title">Stanislav Kois</h3>
      <p className="testimonial-subtitle">Rediger Orthodontics</p>
      <p className="testimonial-description">An award-winning, best-in-class digital marketing company, their commitment is to take a customized approach to each client so they can best meet your goals.</p>
    </div>
  </div>
);

export default Testimonial;