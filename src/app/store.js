import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/input/inputSlice";
import sizeReducer from "../features/size/sizeSlice";
import loginReducer from "../features/login/loginSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  input: inputReducer,
  size: sizeReducer,
  login: loginReducer,
});

// Configure `redux-persist`
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["input", "size", "login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
