import { Box, Stack, Tab, Tabs } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth } from 'app/firebase';
import LoginForm from 'components/Form/LoginForm';
import SignUp from 'components/Form/SignUp';
import { authActions } from 'features/auth/authSlice';
import useAuth from 'features/auth/useAuth';
import { a11yProps, TabPanel } from 'pages/ListenerDetail';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const updateUser = (user) => {
    if (!user) return;
    dispatchUserData(user);
    navigate('/');
  };
  const {
    user,
    error,
    signInWithGoogle,
    signInWithFacebook,
    signOut: signOutBoth,
  } = useAuth(updateUser);

  const handleLoginWithPassword = async ({ email, password }) => {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      const userData = credential.user;
      dispatchUserData(userData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      signInWithGoogle();
      const userData = user && user;
      dispatchUserData(userData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      signInWithFacebook();
      const userData = user && user;
      dispatchUserData(userData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const dispatchUserData = (userData) => {
    console.log({ userData });
    dispatch(
      authActions.login({
        uid: userData.uid,
        displayName: userData.displayName,
        photoURL: userData.photoURL,
        email: userData.email,
      })
    );
  };

  return (
    <Stack justifyContent='center' alignItems='center' height='100vh'>
      <Box sx={{ maxWidth: 300, width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='Đăng nhập' {...a11yProps(0)} />
            <Tab label='Đăng kí' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div>
            <LoginForm
              onLoginWithPassword={handleLoginWithPassword}
              onLoginWithGoogle={handleLoginWithGoogle}
              onLoginWithFacebook={handleLoginWithFacebook}
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
      </Box>
    </Stack>
  );
};

export default Auth;
