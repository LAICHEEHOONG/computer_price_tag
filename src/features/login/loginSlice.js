import { createSlice } from "@reduxjs/toolkit";
import { sha256 } from "../../utils/tool";

const initialState = {
  webPassword: "",
  clientPassword: "",
  login: false,
  limit: 0,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    generateWebPassword: async (state) => {
      // when the new hash password not match the old hash password Store the hash to redux , then the limit reset to 0,
      // If new hash match the old hash, then nothing to do
      const today = new Date().getDate();
      const todayPassword = `PCD888${today}`;
      try {
        const newWebPassword = await sha256(todayPassword);
        if (newWebPassword !== state.webPassword) {
          state.webPassword = newWebPassword;
          state.limit = 0;
        }
      } catch (err) {
        console.log(err);
      }
    },
    clientInputPassword: async (state, action) => {
      // If client password not match website password redux login = false, limit + 1
      try {
        let loginAttempt = await sha256(action.payload); // Password attempt during login
        state.clientPassword = loginAttempt;
        if (loginAttempt === state.webPassword) {
          state.login = true;
        } else {
          state.login = false;
          state.limit = state.limit + 1;
        }
      } catch (err) {
        console.log(err);
      }
    },
    // lockWebsite: (state) => {
    //   // If limit = 10 show lock in info hidden the input field, info show message failed 10 time, pls try tomorrow
    //   // If client password match web password login = true, then go to home page

    // },
  },
});

export const { generateWebPassword, clientInputPassword } = loginSlice.actions;

export default loginSlice.reducer;
