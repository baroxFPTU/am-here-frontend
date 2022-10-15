import { Button, Divider, Link, Stack, TextField } from '@mui/material';
import GoogleIcon from 'assets/img/google-icon.png';
import { useRef } from 'react';
import { FaFacebookF } from 'react-icons/fa';
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
        <GoogleButton variant='contained' onClick={handleClickLoginWithGoogle}>
          <img src={GoogleIcon} alt='icon-google' />
        </GoogleButton>
        <Button
          variant='contained'
          sx={{ background: '#1b74e4', py: 1, boxShadow: 'none' }}
          size='medium'
          onClick={handleClickLoginWithFacebook}
        >
          <FaFacebookF />
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginForm;