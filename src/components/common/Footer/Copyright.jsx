import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between' py={5}>
      <div className=''>
        <Link to='#'>Bản quyền thuộc về AMHERE</Link>
      </div>
      <div className=''>
        <span>© 2022 Copyright</span>
      </div>
    </Stack>
  );
};

export default Copyright;
