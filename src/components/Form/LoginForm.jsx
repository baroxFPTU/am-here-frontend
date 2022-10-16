import { Button, Divider, Stack, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import GoogleIcon from 'assets/img/google-icon.png';
import { useRef } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoogleButton = styled(Button)`
  background: #fff !important;
  padding: 10px 0;
  box-shadow: none !important;
  color: #333;
  border: 1px solid #ddd !important;
  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #ddd;
  }
`;

const LoginForm = ({ onLoginWithPassword, onLoginWithGoogle, onLoginWithFacebook }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    onLoginWithPassword({ email, password });
  };

  const handleClickLoginWithGoogle = () => {
    onLoginWithGoogle();
  };

  const handleClickLoginWithFacebook = () => {
    onLoginWithFacebook();
  };

  return (
    <Stack className='LoginBox' spacing={4}>
      <Typography variant='h5'>Đăng nhập</Typography>
      <form className='form-container' onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id='email'
            label='Email'
            type='email'
            variant='outlined'
            inputRef={emailInputRef}
          />
          <TextField
            id='password'
            label='Mật khẩu'
            type='password'
            variant='outlined'
            inputRef={passwordInputRef}
          />
          <Link>Bạn quên mật khẩu ư?</Link>

          <Button
            type='submit'
            onClick={handleSubmit}
            variant='contained'
            sx={{ width: '100%', boxShadow: 'none' }}
          >
            Đăng nhập
          </Button>
        </Stack>
      </form>

      <Divider>Hoặc</Divider>
      <Stack direction='row' justifyContent='center' spacing={2}>
        <Button sx={{ width: '100%' }}>
          <Link to='/auth/sign-up'>Đăng kí</Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
