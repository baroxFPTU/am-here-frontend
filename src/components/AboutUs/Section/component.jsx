import { Container } from '@mui/material';
import React from 'react';
import * as Styled from './styles';

const Section = ({ header, children, bgColor, bgImage }) => {
  return (
    <Styled.Section bgColor={bgColor} bgImage={bgImage}>
      <Container>
        <div className='section-header'>
          <h2>{header.title}</h2>
          <p>{header.subtitle}</p>
        </div>
        {children}
      </Container>
    </Styled.Section>
  );
};

export default Section;
