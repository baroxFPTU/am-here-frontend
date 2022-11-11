import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from 'features/counter/counterSlice';
import authReducer from 'features/auth/authSlice';
import chatReducer from 'features/chat/chatSlice';
import rootSaga from './rootSaga';
import commonReducer from 'features/common/commonSlice';

const rootReducer = combineReducers({
  common: commonReducer,
  counter: counterReducer,
  auth: authReducer,
  chat: chatReducer,
});
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);
