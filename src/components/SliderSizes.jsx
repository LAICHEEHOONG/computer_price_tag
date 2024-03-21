import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { updateSize } from "../features/size/sizeSlice";
import Chip from "@mui/material/Chip";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";

export default function SliderSizes() {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.size);
  return (
    <Box sx={{ width: 400, marginTop: "30px" }}>
      <Slider
        value={(size.size * 50).toFixed(0)}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={(e) => {
          dispatch(updateSize(e.target.value));
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Chip icon={<SwapHorizIcon />} label={`${size.width} mm`} />
        <Chip icon={<SwapVertIcon />} label={`${size.height} mm`} />
      </div>
    </Box>
  );
}
