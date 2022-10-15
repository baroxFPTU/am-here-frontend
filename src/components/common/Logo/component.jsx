import React from 'react';
import * as Styled from './styles';
import LogoUrl from 'assets/img/logo.png';

const Logo = () => {
  return (
    <Styled.Logo>
      <img src={LogoUrl} alt='Am here logo' />
    </Styled.Logo>
  );
};

export default Logo;
