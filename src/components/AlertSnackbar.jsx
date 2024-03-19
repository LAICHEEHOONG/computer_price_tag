import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { openAlert } from "../features/input/inputSlice";
import { useNavigate, useLocation } from "react-router-dom";

export default function AlertSnackbar() {
  const open = useSelector((state) => state.input.alert);
  const message = useSelector((state) => state.input.alertMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setOpen = (boolean) => {
    dispatch(openAlert(boolean));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {message === "Price tag added" && (
        <Button
          color="secondary"
          size="small"
          onClick={() => {
            navigate(`/computer_price_tag/pricetag`);
          }}
        >
          CHECK IT OUT
        </Button>
      )}

      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
}
