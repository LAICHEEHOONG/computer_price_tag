import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../features/login/loginSlice";
// import Button from '@mui/material/Button';

export default function BackdropProgress() {
  const loading = useSelector((state) => state.login.loading);
  const dispatch = useDispatch();
  //   const [open, setOpen] = React.useState(false);
  //   const handleClose = () => {
  //     setOpen(false);
  //     dispatch(setLoading(false))
  //   };
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      />
      <CircularProgress color="inherit" size={100} />
    </div>
  );
}
