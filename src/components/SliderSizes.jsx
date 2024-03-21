import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { updateSize } from "../features/size/sizeSlice";

export default function SliderSizes() {
  const dispatch = useDispatch();
  const size = useSelector(state => state.size.size)
  return (
    <Box sx={{ width: 400, marginTop: "30px" }}>
      <Slider
        value={(size * 50).toFixed(0)}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e) => {
          dispatch(updateSize(e.target.value))
        }}
      />
    </Box>
  );
}