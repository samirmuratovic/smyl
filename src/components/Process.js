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
        description={'We provide you with a free website audit and discuss your digital needs. If it makes sense to work together, we create a project timeline and kick the project off.'}
      />
      <ProcessCard 
        illustration={evaluation}
        title={'Evaluation'}
        number={'02'}
        description={'We dig deep and tailor solutions that are specific to your practice and business strategy. We provide you with options and help you pick the one that works best for you.'}
      />
      <ProcessCard 
        illustration={execution}
        title={'Execution'}
        number={'03'}
        description={'Our talented team brings your digital solution to life. From branding to development, we take care of your needs, so you don’t have to waste quality time.'}
      />
    </div>
  </div>
);

export default Process;