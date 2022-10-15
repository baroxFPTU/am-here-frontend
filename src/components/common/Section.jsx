import { Box, Container } from '@mui/material';
import React from 'react';

const Section = ({ children, ...props }) => {
  return (
    <Box as='section' sx={{ py: 10, display: 'flex' }} {...props}>
      {children}
    </Box>
  );
};

export default Section;
