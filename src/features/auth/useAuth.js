import { auth } from 'app/firebase';
import { authActions } from 'features/auth/authSlice';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function useAuth(callback) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  useEffect(() => {
    // console.log(user);
    if (!callback) return;
    if (user) {
      callback(user);
    }
  }, [user]);

  useEffect(() => {
    const unregistered = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      setUser(user);
    });

    return () => {
      unregistered();
    };
  }, []);

  const signIn = async (platform) => {
    let provider = null;

    switch (platform) {
      case 'google':
        provider = googleProvider;
        break;
      case 'facebook':
        provider = facebookProvider;
        break;
      default:
        setError('Still not supported on this platform.');
        return;
    }
    try {
      const response = await signInWithPopup(auth, provider);
      if (!response) throw new Error('Could not sign in. Let try again.');
    } catch (error) {
      setError(error.message);
    }
  };

  const signInWithGoogle = useCallback(async () => {
    signIn('google');
  }, []);

  const signInWithFacebook = useCallback(async () => {
    signIn('facebook');
  }, []);

  const signOutBoth = useCallback(async () => {
    const response = await signOut(auth);
    const action = authActions.logout();
    dispatch(action);
  }, []);

  return { user, error, signInWithGoogle, signInWithFacebook, signOut: signOutBoth };
}

export default useAuth;
