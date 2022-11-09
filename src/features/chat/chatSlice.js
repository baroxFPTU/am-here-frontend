const { createSlice, createSelector } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  currentReceiver: null,
  currentConversation: null,
  conversations: [],
  messages: [],
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
      state.messages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    setCurrentReceiver: (state, action) => {
      state.currentReceiver = action.payload;
    },
    loadConversations: (state) => {},
    startConversationAsync: (state) => {},
    startConversationAsyncSuccess: (state, action) => {
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
export const selectCurrentReceiver = (state) => state.chat.currentReceiver;
export const selectConversations = (state) => state.chat.conversations;
export const selectMessages = (state) => state.chat.messages;
export default chatSlice.reducer;
