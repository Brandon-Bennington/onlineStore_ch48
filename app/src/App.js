import './App.css';
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./pages/home/home.jsx";
import Catalog from "./pages/catalog/catalog.jsx";
import About from "./pages/about/about.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
