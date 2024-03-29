import "./App.css";
import HomePage from "./pages/HomePage";
import PriceTagPage from "./pages/PriceTagPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AlertSnackbar from "./components/AlertSnackbar";
import EditPriceTagDialog from "./components/Dialog";
import LoginPage from "./pages/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  generateWebPassword,
  generateClientPassword,
} from "./features/login/loginSlice";

function App() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const handle = {
    generateWebPassword: () => {
      dispatch(generateWebPassword());
    },
    generateClientPassword: (password) => {
      dispatch(generateClientPassword(password));
    },
  };

  useEffect(() => {
    handle.generateWebPassword();
  }, []);

  return (
    <>
      {login.login ? (
        <div className="app-container">
          <Navbar />

          <div>
            <EditPriceTagDialog />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/computer_price_tag" element={<HomePage />} />
            <Route path="/pricetag" element={<PriceTagPage />} />
            <Route
              path="/computer_price_tag/pricetag"
              element={<PriceTagPage />}
            />
          </Routes>
        </div>
      ) : (
        <LoginPage />
      )}

      <div className="alert-container">
        <AlertSnackbar />
      </div>
    </>
  );
}

export default App;
