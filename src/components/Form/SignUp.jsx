import React from 'react';
import { Button, Divider, Link, Stack, TextField } from '@mui/material';
import { FaFacebookF } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';

const SignUp = () => {
  return (
    <Stack className='SignUpBox' spacing={4}>
      <Stack spacing={2}>
        <TextField id='email' label='Email' type='email' variant='outlined' />
        <TextField id='password' label='Mật khẩu' type='password' variant='outlined' />
        <TextField
          id='confirm-password'
          label='Nhập lại mật khẩu'
          type='password'
          variant='outlined'
        />
      </Stack>
      <Button type='submit' variant='contained' sx={{ width: '100%', boxShadow: 'none' }}>
        Đăng nhập
      </Button>
    </Stack>
  );
};

export default SignUp;
