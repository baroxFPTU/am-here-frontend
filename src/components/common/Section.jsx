import { Box, Container } from '@mui/material';
import React from 'react';

const Section = ({ children }) => {
  return (
    <Box as='section' sx={{ py: 6 }}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
