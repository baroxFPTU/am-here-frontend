import { Box, Stack } from '@mui/material';
import { REACT_APP_API_URL } from 'app/constant';
import { auth } from 'configs/firebase';
import axios from 'axios';
import LoginForm from 'components/Form/LoginForm';
import { authActions } from 'features/auth/authSlice';
import useAuth from 'features/auth/hooks/useAuth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, signInWithGoogle, signInWithFacebook } = useAuth();
  const handleLoginWithPassword = async ({ email, password }) => {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const userData = credential.user;
      dispatchUserData(userData);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle('/');
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

  const dispatchUserData = async (userData) => {
    console.log({ userData });
    try {
      if (!userData) return;
      const response = await axios.post(`${REACT_APP_API_URL}/user`, {
        nickname: userData.displayName,
        uid: userData.uid,
        email: userData.email,
      });
      const result = await response.data;
      console.log({ result });
      dispatch(
        authActions.login({
          id: result._id,
          uid: userData.uid,
          nickname: result.nickname,
          photoURL: result.photoURL,
          email: result.email,
          active_role: result.active_role,
        })
      );
      localStorage.setItem('active_role', result.active_role);
    } catch (error) {
      throw new Error(error);
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
