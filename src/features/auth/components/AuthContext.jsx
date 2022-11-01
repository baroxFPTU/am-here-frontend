import { CircularProgress, Stack } from '@mui/material';
import { axiosClient } from 'app/axiosClient';
import { onAuthStateChanged } from 'firebase/auth';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { put } from 'redux-saga/effects';
import { authActions, selectIsAuthenticating } from '../authSlice';

const AuthContext = ({ auth, children }) => {
  const isAuthenticating = useSelector(selectIsAuthenticating);
  const dispatch = useDispatch();

  useEffect(() => {
    const unregistered = onAuthStateChanged(
      auth,
      async (user) => {
        if (!user) {
          return dispatch(authActions.selectIsAuthenticating(false));
        }
        dispatch(authActions.signInWithPasswordAsync(user.accessToken));
      },
      []
    );

    unregistered();
  }, []);

  if (isAuthenticating)
    return (
      <Stack sx={{ height: '100vh' }} alignItems='center' justifyContent='center'>
        <CircularProgress />
      </Stack>
    );

  return <>{!isAuthenticating && children}</>;
};

export default memo(AuthContext);
