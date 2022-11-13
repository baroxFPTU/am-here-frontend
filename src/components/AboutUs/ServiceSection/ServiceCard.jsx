import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import * as Styled from './styles';

const ServiceCard = ({ service }) => {
  return (
    <Styled.ServiceCard>
      <div className='icon'>{<service.icon /> || <BsFillPeopleFill />}</div>
      <h3 className='title'>{service?.title}</h3>
      <p>{service?.description}</p>
    </Styled.ServiceCard>
  );
};

export default ServiceCard;
