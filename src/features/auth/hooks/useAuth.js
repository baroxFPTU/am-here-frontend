import { auth } from 'configs/firebase';
import { authActions, selectUser } from 'features/auth/authSlice';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const signIn = async (platform, redirectPath) => {
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
      navigate(redirectPath);
      if (!response) throw new Error('Could not sign in. Let try again.');
    } catch (error) {
      setError(error.message);
    }
  };

  const signInWithGoogle = useCallback(async (redirectPath = '/') => {
    signIn('google', redirectPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInWithFacebook = useCallback(async (redirectPath = '/') => {
    signIn('facebook', redirectPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUpWithPassword = useCallback(async ({ email, password, displayName, photoURL }) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      updateUserData({ displayName: displayName, photoURL: photoURL });
    } catch (error) {
      throw new Error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUserData = useCallback(async ({ displayName, photoURL }) => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  }, []);

  const signOutAll = useCallback(async () => {
    await signOut(auth);
    const action = authActions.logout();
    dispatch(action);
    navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user: currentUser,
    error,
    signInWithGoogle,
    signInWithFacebook,
    signOut: signOutAll,
    signUpWithPassword,
    updateUserData,
  };
}

export default useAuth;
