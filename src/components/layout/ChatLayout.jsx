import React, { createContext } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '../common/Header/component';

export const ChatContext = createContext();

const ChatLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as='main' sx={{ pt: 8, flex: 1, display: 'flex', maxHeight: '100%' }}>
        {children || <Outlet />}
      </Box>
    </>
  );
};

export default ChatLayout;
