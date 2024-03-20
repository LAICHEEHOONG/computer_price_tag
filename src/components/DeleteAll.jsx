import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { UseDispatch, useDispatch } from "react-redux";
import { removeAll } from "../features/input/inputSlice";

export default function DeleteAll() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Fab color="warning" aria-describedby={id} onClick={handleClick}>
        <DeleteIcon />
      </Fab>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div>
          <div style={{ padding: "10px" }}>
            <Alert severity="warning">
              <AlertTitle>Remove All</AlertTitle>
              Are you sure you want to remove all price tags?
            </Alert>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "10px",
              gap: "10px",
            }}
          >
            <Button
              color="warning"
              onClick={() => {
                dispatch(removeAll());
              }}
            >
              Yes
            </Button>
            <Button onClick={handleClose}>No</Button>
          </div>
        </div>
      </Popover>
    </div>
  );
}
