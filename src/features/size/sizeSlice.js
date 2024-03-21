import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: 1,
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    updateSize: (state, action) => {
      if(action.payload !== 0) {
        state.size = action.payload / 50;
      } else {
        state.size = 0;
      }

    },
  },
});

export const { updateSize } = sizeSlice.actions;

export default sizeSlice.reducer;
