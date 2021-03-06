import React from 'react';
import tooth from './../../public/assets/tooth.svg';

const Hero = () => (
  <div className="hero">
    <h1>Better digital solutions for dental practices</h1>
    <p>Attract ideal patients and grow your practice with a partner who aligns with your specific goals</p>
    <a href="mailto:hello@smyl.com" className="cta">Book a free consultation</a>
    <img src={tooth} className="tooth" />
  </div>
);

export default Hero;