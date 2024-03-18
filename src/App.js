import "./App.css";
import HomePage from "./pages/HomePage";
import PriceTagPage from "./pages/PriceTagPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AlertSnackbar from "./components/AlertSnackbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="alert-container">
        <AlertSnackbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/computer_price_tag" element={<HomePage />} />
        <Route path="/pricetag" element={<PriceTagPage />} />
      </Routes>
    </div>
  );
}

export default App;
