import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticating: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticating = false;
    },
    logout: (state) => {
      state.user = null;
    },
    signInWithPasswordAsync: (state, action) => {
      state.isAuthenticating = true;
    },
    signInWithPasswordAsyncSuccess: (state, action) => {
      state.isAuthenticating = false;
      state.user = action.payload;
    },
    signInWithPasswordAsyncError: (state) => {
      state.isAuthenticating = false;
    },
    signUpWithPasswordAsync: (state, action) => {
      state.isAuthenticating = true;
    },
    signUpWithPasswordAsyncError: (state, action) => {
      state.isAuthenticating = false;
    },
    signInWithProviderAsync: (state, action) => {
      state.isAuthenticating = true;
    },
    signInWithProviderAsyncSuccess: (state, action) => {
      state.isAuthenticating = false;
      state.user = action.payload;
    },
    signInWithProviderAsyncError: (state, action) => {
      state.isAuthenticating = false;
    },
    setUserId: (state, action) => {
      state.user.id = action.payload;
    },
    selectIsAuthenticating: (state, action) => {
      state.isAuthenticating = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = createSelector(selectUser, (user) => {
  return Boolean(user);
});
export const selectIsAuthenticating = (state) => state.auth.isAuthenticating;
export const selectAuthenticated = createSelector(
  selectUser,
  selectIsAuthenticating,
  (user, isAuthenticating) => {
    return !isAuthenticating && user;
  }
);
export const selectCurrentRole = (state) => state.auth.user?.role_data;

export default authSlice.reducer;
