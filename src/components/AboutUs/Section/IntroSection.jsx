import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import IntroImage from '../../../assets/img/hero_home_bg_1.png';

const IntroSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12rem;
  padding-bottom: 3rem;
  min-height: 100vh;
  text-align: center;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  p.slogan {
    font-size: 3rem;
  }
  img {
    margin-top: auto;
  }
`;

const IntroSection = () => {
  return (
    <IntroSectionStyled>
      <Container>
        <h1>Về Amhere</h1>
        <p className='slogan'>Chia sẻ và lắng nghe là giá trị cốt lõi của tổ chức chúng tôi</p>
      </Container>
      <img src={IntroImage} alt='' />
    </IntroSectionStyled>
  );
};

export default IntroSection;
