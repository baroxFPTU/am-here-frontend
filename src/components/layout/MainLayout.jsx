import React from 'react';

import { Box } from '@mui/material';
import Footer from 'components/common/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/component';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as='main' sx={{ pt: 8, flex: 1 }}>
        {children || <Outlet />}
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
