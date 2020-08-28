import React from 'react';
import FailFeature from './FailFeature';

const Failures = () => (
  <div className="failures">
    <h2>Dental Websites.</h2> 
    <h2 className="grey">Miss the Mark.</h2> 
    <div className="feature-wrapper">
      <FailFeature 
        heading={'Too many stock photos'}
        description={'Patients want to see real photos of the work you have done.'}
      />
      <FailFeature 
        heading={'Not mobile-friendly'}
        description={'If your website doesn’t perform well on mobile, you are losing many potential patients.'}
      />
      <FailFeature 
        heading={'Failure to establish trust'}
        description={'It’s pretty simple, if you can’t show credibility, patients will not choose your practice.'}
      />
      <FailFeature 
        heading={'Contact info hard to find'}
        description={'Failing to make contact info easily available will result in many failed patient conversions.'}
      />
      <FailFeature 
        heading={'No staff photos'}
        description={'Patients want to see and learn about the staff that will be taking care of their dental health.'}
      />
      <FailFeature 
        heading={'No patient reviews'}
        description={'Most new patients want to see reviews and testimonials before booking a first appointment.'}
      />
      <FailFeature 
        heading={'No differentiators'}
        description={'Set your practice apart by showcasing why patients should choose you.'}
      />
    </div>
  </div>
);

export default Failures;