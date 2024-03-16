import "./App.css";
import HomePage from "./pages/HomePage";
import PriceTagPage from "./pages/PriceTagPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AlertSnackbar from "./components/AlertSnackbar";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const showNav = useSelector((state) => state.input.showNav);

  return (
    <div className="app-container">
      {showNav && <Navbar />}
      <AlertSnackbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricetag" element={<PriceTagPage />} />
      </Routes>
    </div>
  );
}

export default App;
