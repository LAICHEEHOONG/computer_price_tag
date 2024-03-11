
import './App.css';
import HomePage from './pages/HomePage';
import PriceTagPage from './pages/PriceTagPage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pricetag' element={<PriceTagPage />} />
      </Routes>
    </div>
  );
}

export default App;

