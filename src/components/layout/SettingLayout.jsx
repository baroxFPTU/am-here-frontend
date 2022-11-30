import React from 'react';

import { Box, Container, Grid } from '@mui/material';
import Footer from 'components/common/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header/component';
import SettingSidebar from 'components/settings/SettingSidebar';

const SettingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as='main' sx={{ pt: 8, flex: 1, minHeight: '100vh' }}>
        <Container sx={{ pt: 6 }}>
          <Grid container>
            <Grid item xs={'250px'}>
              <SettingSidebar />
            </Grid>
            <Grid item xs={'1fr'}>
              <Container>{children || <Outlet />}</Container>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SettingLayout;
