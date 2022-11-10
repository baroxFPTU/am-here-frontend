import authSaga from 'features/auth/authSaga';
import { chatSaga } from 'features/chat/chatSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), chatSaga()]);
}
