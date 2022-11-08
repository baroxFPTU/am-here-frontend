const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  currentReceiver: null,
  currentConversationId: null,
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
  },
});

export const chatActions = chatSlice.actions;

export const selectConversations = (state) => state.chat.conversations;
export const selectCurrentReceiver = (state) => state.chat.currentReceiver;
export const selectMessages = (state) => state.chat.messages;
export default chatSlice.reducer;
