import { axiosClient } from 'app/axiosClient';
import { auth } from 'configs/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import { authActions } from './authSlice';

function* signInWithPasswordAsync(action) {
  const token = action.payload;
  if (!token) throw new Error('Token is undefined');
  try {
    const response = yield call(axiosClient.post, 'auth/login-with-password', {
      token,
    });
    const user = response.data;
    yield put(authActions.signInWithPasswordAsyncSuccess(user));
  } catch (error) {
    yield put(authActions.signInWithPasswordAsyncError());
  }
}

function* signUpWithPasswordAsync(action) {
  const user = action.payload;
  if (!user) return null;
  try {
    const firebaseResponse = yield call(
      createUserWithEmailAndPassword,
      auth,
      user.email,
      user.password
    );
    const response = yield call(axiosClient.post, 'auth/register-with-password', {
      uid: firebaseResponse.user.uid,
      nickname: user.nickname,
      email: user.email,
      role_id: user.role_id,
      categories: user.categories,
    });
    console.log({ response });
    yield put(authActions.signInWithPasswordAsyncSuccess(response.data));
  } catch (error) {
    yield put(authActions.signUpWithPasswordAsyncError());
  }
}

function* signInWithProviderAsync(action) {
  console.log('sign in provider run');
  const token = action.payload.token;
  const providerType = action.payload.provider_type;
  try {
    const firebaseResponse = yield call(axiosClient.post, '/auth/login-with-provider', {
      token,
      provider_type: providerType,
    });

    yield put(authActions.signInWithProviderAsyncSuccess(firebaseResponse.data));
  } catch (error) {
    yield put(authActions.signInWithProviderAsyncError());
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.signInWithPasswordAsync, signInWithPasswordAsync);
  yield takeLatest(authActions.signUpWithPasswordAsync, signUpWithPasswordAsync);
  yield takeLatest(authActions.signInWithProviderAsync, signInWithProviderAsync);
}
