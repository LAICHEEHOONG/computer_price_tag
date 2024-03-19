import "./App.css";
import HomePage from "./pages/HomePage";
import PriceTagPage from "./pages/PriceTagPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AlertSnackbar from "./components/AlertSnackbar";
import EditPriceTagDialog from "./components/Dialog";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="alert-container">
        <AlertSnackbar />
      </div>
      <div>
        <EditPriceTagDialog />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/computer_price_tag" element={<HomePage />} />
        <Route path="/pricetag" element={<PriceTagPage />} />
        <Route path="/computer_price_tag/pricetag" element={<PriceTagPage />} />
        <Route path="/computer_price_tag/*" element={<HomePage />} />
        {/* <Route path="/*" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

//App.js
