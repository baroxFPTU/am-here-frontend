import React from 'react';
import * as Styled from './styles';

const AboutSection = () => {
  return (
    <Styled.AboutSection>
      <div className='left'>
        <img src='http://amhere.life/img/about_amhere_1.jpg' alt='' />
      </div>
      <div className='right'>
        <p>
          Lorem ipsum dolor sit amet, homero erroribus in cum. Cu eos scaevola probatus. Nam atqui
          intellegat ei, sed ex graece essent delectus. Autem consul eum ea. Duo cu fabulas nonumes
          contentiones, nihil voluptaria pro id. Has graeci deterruisset ad, est no primis detracto
          pertinax, at cum malis vitae facilisis. Dicam diceret ut ius, no epicuri dissentiet
          philosophia vix. Id usu zril tacimates neglegentur. Eam id legimus torquatos cotidieque,
          usu decore percipitur definitiones ex, nihil utinam recusabo mel no. Dolores reprehendunt
          no sit, quo cu viris theophrastus. Sit unum efficiendi cu.
        </p>
        <p className='italic'>CEO Marc Schumaker</p>
      </div>
    </Styled.AboutSection>
  );
};

export default AboutSection;
