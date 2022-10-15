import { Box } from '@mui/material';
import Footer from 'components/common/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/component';

const ChatLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as='main' sx={{ pt: 8, flex: 1, display: 'flex' }}>
        {children || <Outlet />}
      </Box>
    </>
  );
};

export default ChatLayout;
