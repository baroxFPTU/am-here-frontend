import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Navbar from '../Navbar';
import * as Styled from './styles';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Link to='/'>
          <Logo />
        </Link>
        <Navbar />
      </Styled.HeaderContainer>
    </Styled.Header>
  );
};

export default Header;
