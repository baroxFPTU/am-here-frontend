import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  activeRole: null,
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
    setActiveRole: (state, action) => {
      state.activeRole = action.payload;
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
export const selectCurrentRole = (state) => state.auth.user?.active_role;

export default authSlice.reducer;
