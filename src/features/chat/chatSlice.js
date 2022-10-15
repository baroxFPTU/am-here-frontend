const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  currentReceiver: null,
  contacts: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setData: (state, action) => {
      const { currentReceiver, contacts } = action.payload;
      state.currentReceiver = currentReceiver;
      state.contacts = contacts;
    },
    setCurrentReceiver: (state, action) => {
      state.currentReceiver = action.payload;
    },
  },
});

export const chatActions = chatSlice.actions;

export const selectContacts = (state) => state.chat.contacts;
export const selectCurrentReceiver = (state) => state.chat.currentReceiver;

export default chatSlice.reducer;
