const { createSlice } = require('@reduxjs/toolkit');

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      if (typeof action.payload === 'boolean') {
        state.isLoading = action.payload;
      }
    },
  },
});

export const commonActions = commonSlice.actions;

export const selectIsLoading = (state) => state.common.isLoading;

const commonReducer = commonSlice.reducer;
export default commonReducer;
