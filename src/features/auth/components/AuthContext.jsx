import { CircularProgress, Stack } from '@mui/material';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, selectIsAuthenticating } from '../authSlice';

const AuthContext = ({ auth, children }) => {
  const isAuthenticating = useSelector(selectIsAuthenticating);
  const dispatch = useDispatch();
  useEffect(() => {
    const unregistered = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return dispatch(authActions.selectIsAuthenticating(false));
      }
      dispatch(
        authActions.login({
          id: user.uid,
          nickname: user.displayName,
          photoURL: user.photoURL,
        })
      );
    });

    return () => {
      unregistered();
    };
  }, [dispatch, auth]);

  if (isAuthenticating)
    return (
      <Stack sx={{ height: '100vh' }} alignItems='center' justifyContent='center'>
        <CircularProgress />
      </Stack>
    );

  return <>{!isAuthenticating && children}</>;
};

export default AuthContext;
