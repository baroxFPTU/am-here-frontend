import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import authReducer from 'features/auth/authSlice';
import chatReducer from 'features/chat/chatSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    chat: chatReducer,
  },
});
