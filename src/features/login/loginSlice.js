import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  webPassword: "",
  clientPassword: "",
  login: false,
  limit: 0,
  loading: true,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setWebPassword: (state, action) => {
      const newWebPassword = action.payload;
      if (newWebPassword !== state.webPassword) {
        state.login = false;
        state.limit = 0;
        state.webPassword = newWebPassword;
      }

      state.loading = false;
    },
    setClientPassword: (state, action) => {
      state.clientPassword = action.payload;
      if (state.clientPassword !== state.webPassword) {
        state.limit = state.limit + 1;
      } else {
        state.login = true;
        state.limit = 0;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setWebPassword, setClientPassword, setLoading } =
  loginSlice.actions;

export const generateWebPassword = () => async (dispatch) => {
  dispatch(setLoading(true));
  const today = new Date().getDate();
  const todayPassword = `PCD888${today}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(todayPassword);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  dispatch(setWebPassword(hashHex));
};

export const generateClientPassword = (password) => async (dispatch) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  dispatch(setClientPassword(hashHex));
};

export default loginSlice.reducer;
