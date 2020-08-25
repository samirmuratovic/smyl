import React from 'react';
import mac from './../../public/assets/mac@px.png';
import DigitalFeature from './DigitalFeature';

const DigitalFeatures = () => (
  <div className="digital-features">
    <div className="digital-features-content">
      <h3 className="digital-features-title">Build your digital front office</h3>
      <div className="digital-feature-wrapper">
        <DigitalFeature
          title={'Fully Custom Design'}
          description={'One of the best ways to set your practice apart is with a fully custom website design. We listen to your goals and create a unique design that aligns with them.'}
        />
        <DigitalFeature
          title={'Responsive & Mobile-friendly'}
          description={'We understand how critical this is in today’s digital world, so we design every website to look and operate flawlessly across all screen sizes and devices.'}
        />
        <DigitalFeature
          title={'Search Engine Optimized'}
          description={'We make sure your practice shows up in search engine results and become visible to new patients.'}
        />
        <DigitalFeature
          title={'Monthly Maintenance'}
          description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'}
        />
      </div>

    </div>
    <div className="digital-features-image">
      <img src={mac} title="mac" />
    </div>
  </div>
);

export default DigitalFeatures; 