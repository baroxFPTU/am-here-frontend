import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  activeRole: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state = { ...initialState };
    },
    setActiveRole: (state, action) => {
      state.activeRole = action.payload;
    },
    setUserId: (state, action) => {
      state.user.id = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
