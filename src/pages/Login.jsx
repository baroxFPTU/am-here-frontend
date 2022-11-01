import { Box, Stack } from '@mui/material';
import LoginForm from 'components/Form/LoginForm';
import { auth } from 'configs/firebase';
import { authActions } from 'features/auth/authSlice';
import useAuth from 'features/auth/hooks/useAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { signInWithGoogle, signInWithFacebook } = useAuth();
  const handleLoginWithPassword = async ({ email, password }) => {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(authActions.signInWithPasswordAsync(credential.user.accessToken));
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const response = await signInWithGoogle();
      console.log('dispatch');
      dispatch(
        authActions.signInWithProviderAsync({
          token: response.user.accessToken,
          provider_type: 'google.com',
        })
      );
      // dispatchUserData(user);
      // navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      await signInWithFacebook();
      // dispatchUserData(user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack justifyContent='center' alignItems='center' height='100vh'>
      <Box sx={{ maxWidth: 300, width: '100%' }}>
        <div>
          <LoginForm
            onLoginWithPassword={handleLoginWithPassword}
            onLoginWithGoogle={handleLoginWithGoogle}
            onLoginWithFacebook={handleLoginWithFacebook}
          />
        </div>
      </Box>
    </Stack>
  );
};

export default Login;
