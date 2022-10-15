import { Box, Stack } from '@mui/material';
import SignUpForm from 'components/Form/SignUpForm';
import React from 'react';

const SignUp = () => {
  return (
    <Stack justifyContent='center' alignItems='center' height='100vh'>
      <Box sx={{ maxWidth: 300, width: '100%' }}>
        <SignUpForm />
      </Box>
    </Stack>
  );
};

export default SignUp;
