import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../authSlice';

const AuthContext = ({ auth, children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unregistered = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return dispatch(authActions.selectIsAuthenticating(false));
      }
      console.log({ user });
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

  return <>{children}</>;
};

export default AuthContext;
