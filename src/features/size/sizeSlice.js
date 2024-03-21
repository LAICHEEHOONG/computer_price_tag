import { createSlice } from "@reduxjs/toolkit";
import { getElementDimensionsInMM } from "../../utils/tool";

const initialState = {
  size: 1,
  width: 0,
  height: 0,
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    updateSize: (state, action) => {
      if (action.payload !== 0) {
        state.size = action.payload / 50;
      } else {
        state.size = 0;
      }

      const { width, height } = getElementDimensionsInMM();
      state.width = width.toFixed(0);
      state.height = height.toFixed(0);
    },
  },
});

export const { updateSize } = sizeSlice.actions;

export default sizeSlice.reducer;
