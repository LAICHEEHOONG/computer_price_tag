import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PriceTagCore from "./PriceTagCore";
import { useDispatch, useSelector } from "react-redux";
import { setDialog } from "../features/input/inputSlice";

export default function EditPriceTagDialog() {
  const dispatch = useDispatch();
  const dialog = useSelector((state) => state.input.dialog);

  const handleClickOpen = () => {
    dispatch(setDialog({open: true}));
  };

  const handleClose = () => {
    dispatch(setDialog({open: false}));
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialog.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        sx={{
          width: {
            // xs: "90%", // For small screens
            // sm: "70%", // For medium screens
            md: "1500px", // For large screens
          },
        }}
      >
        {/* here */}
        <div style={{display: 'flex'}}>
          <div>
          <PriceTagCore prop={dialog.targetPriceTag} />
          </div>
          <div>
          <PriceTagCore prop={dialog.targetPriceTag} />
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
