import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import PriceTagCore from "./PriceTagCore";
import { useDispatch, useSelector } from "react-redux";
import { setDialog } from "../features/input/inputSlice";
import EditField from "./EditField";

export default function EditPriceTagDialog() {
  const dispatch = useDispatch();
  const dialog = useSelector((state) => state.input.dialog);
  const priceTags = useSelector((state) => state.input.priceTags);

  const selectedPriceTags = (id) => {
    let result = priceTags.find((obj) => obj.id === id);
    return result;
  };

  const handleClickOpen = () => {
    dispatch(setDialog({ open: true }));
  };

  const handleClose = () => {
    dispatch(setDialog({ open: false }));
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
            // md: "1500px", // For large screens
          },
        }}
      >
        <div className="dialog-container">
          <div>
            <EditField state={dialog.targetPriceTag} />
          </div>
          <div>
            <PriceTagCore prop={selectedPriceTags(dialog.targetPriceTag.id)} />
          </div>
        </div>
        <DialogActions>
          <Button onClick={handleClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
