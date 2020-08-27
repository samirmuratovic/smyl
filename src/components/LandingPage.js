import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Failures from './Failures';
import brush from './../../public/assets/brush.svg';
import Features from './Features';
import Testimonial from './Testimonial';
import DigitalFeatures from './DigitalFeatures';
import Process from './Process';
import Footer from './Footer';

const LandingPage = () => (
  <div className="container">
    <Header />
    <Hero />
    <img src={brush} className="brush" />
    <Failures />
    <Features />
    <Testimonial />
    <DigitalFeatures />
    <Process />
    <Footer />
  </div>
);

export default LandingPage;