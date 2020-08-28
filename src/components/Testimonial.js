import React from 'react';
import testimonialImage from './../../public/assets/person@2x.png';
import accent from './../../public/assets/accent.svg';

const Testimonial = () => (
  <div className="testimonial">
    <div className="testimonial-img-wrapper">
    <img className="img-accent" src={accent} title="accent stripes" />
    <img className="img-person" src={testimonialImage} title="person" />
    </div>
    
    <div className="testimonial-content">
      <h3 className="testimonial-title">Stanislav Kois</h3>
      <p className="testimonial-subtitle">Rediger Orthodontics</p>
      <p className="testimonial-description">Simply the best digital design agency you can work with. They are experts in the dental practice business and have the latest digital solutions to align with your strategy. The turnaround time was incredible and I cannot recommend these guys enough.</p>
    </div>
  </div>
);

export default Testimonial;