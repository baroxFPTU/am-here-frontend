const { createSlice, createSelector } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  currentReceiver: null,
  currentConversation: null,
  conversations: [],
  messages: {},
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    connectSocket: (state, action) => {},
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      const { currentReceiver, conversations } = action.payload;
      state.currentReceiver = currentReceiver;
      state.conversations = conversations;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    addConversation: (state, action) => {
      state.conversations.push(action.payload);
    },
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload;
    },
    setMessages: (state, action) => {
      const { conversationId, data } = action.payload;
      const currentMessages = state.messages;
      currentMessages[conversationId] = data;
      state.messages = currentMessages;
    },
    addMessage: (state, action) => {
      const { conversationId, data } = action.payload;
      const isExistConversationMessages = conversationId in state.messages;
      if (isExistConversationMessages) {
        state.messages[conversationId].push(data);
      } else {
        state.messages[conversationId] = [data];
      }
    },
    clearMessages: (state, action) => {
      const conversationId = action.payload;
      state.messages[conversationId] = [];
    },
    setCurrentReceiver: (state, action) => {
      state.currentReceiver = action.payload;
    },
    loadConversations: (state) => {},
    startConversationAsync: (state) => {},
    startConversationAsyncSuccess: (state, action) => {
      console.log({ conversation: action.payload });
      state.currentConversation = action.payload;
    },
    startConversationAsyncFailed: (state, action) => {},
    loadMessageAsync: (state) => {},
    clearAll: (state) => {
      state = initialState;
    },
  },
});

export const chatActions = chatSlice.actions;

export const selectCurrentConversation = (state) => state.chat.currentConversation;
export const selectConversations = (state) => state.chat.conversations;
export const selectMessages = (state) => state.chat.messages;
export const selectCurrentConversationMessages = createSelector(
  selectCurrentConversation,
  selectMessages,
  (currentConversation, messages) => {
    return messages[currentConversation?._id] || [];
  }
);
export const selectCurrentReceiver = createSelector(selectCurrentConversation, (conversation) => {
  return conversation ? conversation?.participants?.[0] : null;
});
export default chatSlice.reducer;
