import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
