import { axiosClient } from 'app/axiosClient';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import queryString from 'query-string';
import { chatActions } from './chatSlice';
import { commonActions } from 'features/common/commonSlice';

function* startConversationAsync(action) {
  const { uid, cw } = action.payload;
  const query = queryString.stringify(
    {
      uid,
      cw,
    },
    { sort: false }
  );

  try {
    const conversationResponse = yield call(axiosClient.get, `/conversations?${query}`);
    yield put(chatActions.startConversationAsyncSuccess(conversationResponse.data));
    // yield put(chatActions.loadConversations({ uid }));
    yield put(chatActions.addConversation(conversationResponse.data));
  } catch (error) {
    yield put(chatActions.startConversationAsyncFailed());
  }
}

function* loadMessageAsync(action) {
  const { conversationId } = action.payload;
  const query = queryString.stringify({
    id: conversationId,
  });
  yield put(commonActions.setIsLoading(true));

  try {
    const messagesResponse = yield call(axiosClient.get, `/chat?${query}`);
    yield put(chatActions.setMessages({ conversationId, data: messagesResponse.data }));
    yield put(commonActions.setIsLoading(false));
  } catch (error) {
    yield put(commonActions.setIsLoading(false));
  }
}

function* loadConversations(action) {
  const { uid } = action.payload;
  const query = queryString.stringify({
    uid,
  });
  yield put(commonActions.setIsLoading(true));
  try {
    const conversationsResponse = yield call(axiosClient.get, `/conversations/all?${query}`);
    yield put(chatActions.setConversations(conversationsResponse.data));
    yield put(commonActions.setIsLoading(false));
  } catch (error) {
    yield put(commonActions.setIsLoading(false));
  }
}

export function* chatSaga() {
  yield takeLatest(chatActions.startConversationAsync, startConversationAsync);
  yield takeLatest(chatActions.loadMessageAsync, loadMessageAsync);
  yield takeLatest(chatActions.loadConversations, loadConversations);
}
