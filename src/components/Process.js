import React from 'react';
import consultation from './../../public/assets/consultation.svg';
import evaluation from './../../public/assets/evaluation.svg';
import execution from './../../public/assets/execution.svg';
import ProcessCard from './ProcessCard';

const Process = () => (
  <div className="process" id="process">
    <h2>Partnership.</h2>
    <h2>Through Process.</h2>
    <div className="process-card-wrapper">
      <ProcessCard 
        illustration={consultation}
        title={'Consultation'}
        number={'01'}
        description={'Lorem ipsum dolor set, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'}
      />
      <ProcessCard 
        illustration={evaluation}
        title={'Evaluation'}
        number={'02'}
        description={'Lorem ipsum dolor set, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'}
      />
      <ProcessCard 
        illustration={execution}
        title={'Execution'}
        number={'03'}
        description={'Lorem ipsum dolor set, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'}
      />
    </div>
  </div>
);

export default Process;