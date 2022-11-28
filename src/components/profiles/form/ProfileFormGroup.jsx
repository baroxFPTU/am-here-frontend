import { Stack, Typography } from '@mui/material';
import React from 'react';

const ProfileFormGroup = (props) => {
  const { label, children } = props;
  return (
    <Stack direction='row' spacing={3} alignItems='center' mb={3}>
      <Typography variant='body' sx={{ fontWeight: 600, maxWidth: 150, width: '100%' }}>
        {label}
      </Typography>
      {children}
    </Stack>
  );
};

export default ProfileFormGroup;
