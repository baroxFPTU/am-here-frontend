import { LinearProgress } from '@mui/material';
import { selectIsLoading } from 'features/common/commonSlice';
import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Navbar from '../Navbar';
import * as Styled from './styles';

const Header = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Styled.Header>
      <Styled.HeaderContainer>
        <Link to='/'>
          <Logo />
        </Link>
        <Navbar />
      </Styled.HeaderContainer>
      {isLoading && (
        <LinearProgress sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} />
      )}
    </Styled.Header>
  );
};

export default Header;
