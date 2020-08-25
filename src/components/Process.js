import React from 'react';
import mushroom from './../../public/assets/mushroom@2x.png';
import flag from './../../public/assets/flag@2x.png';
import bird from './../../public/assets/bird@2x.png';
import ProcessCard from './ProcessCard';

const Process = () => (
  <div className="process" id="process">
    <h2>Partnership.</h2>
    <h2>Through Process.</h2>
    <div className="process-card-wrapper">
      <ProcessCard 
        illustration={mushroom}
        title={'Consultation'}
        number={'01'}
        description={'Lorem ipsum dolor set, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'}
      />
      <ProcessCard 
        illustration={bird}
        title={'Evaluation'}
        number={'02'}
        description={'Lorem ipsum dolor set, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'}
      />
      <ProcessCard 
        illustration={flag}
        title={'Execution'}
        number={'03'}
        description={'Lorem ipsum dolor set, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'}
      />
    </div>
  </div>
);

export default Process;