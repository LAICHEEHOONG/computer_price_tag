import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import { store } from "./app/store";
import { store, persistor } from './app/store'; 
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <HashRouter>
  //     <App />
  //   </HashRouter>
  // </Provider>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <HashRouter>
      <App />
    </HashRouter>
  </PersistGate>
</Provider>
);
