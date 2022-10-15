import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log({ state });
      console.log({ payload: action.payload });
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state = { ...initialState };
    },
  },
});

export const authActions = authSlice.actions;

export const selectUser = (state) => state.user;
export const selectIsLoggedIn = (state) => state.isLoggedIn;

export default authSlice.reducer;
