import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, IconButton, Stack } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import * as Styled from './styles';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <Container>
        <Stack direction='row' justifyContent='space-between' alignItems='center' paddingY={2}>
          <Logo />
          <div className='MenuBar'>
            <Stack direction='row' spacing={2} className='MenuList'>
              <Button className='MenuItem'>
                <Link href=''>Home</Link>
              </Button>
              <Button className='MenuItem'>
                <Link href=''>Ve chung toi</Link>
              </Button>
              <Button className='MenuItem'>
                <Link href=''>Phong chat</Link>
              </Button>
              <Button className='MenuItem'>
                <Link href=''>Tri lieu voi bac si</Link>
              </Button>
              <Button className='MenuItem'>
                <Link href=''>Lam nguoi lang nghe</Link>
              </Button>
              <IconButton>
                <AccountCircleOutlinedIcon fontSize='large' htmlColor='#87CEEB' />
              </IconButton>
              <IconButton>
                <PersonAddOutlinedIcon fontSize='large' htmlColor='#87CEEB' />
              </IconButton>
            </Stack>
          </div>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
