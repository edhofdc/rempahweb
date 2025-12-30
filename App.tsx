
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Kemitraan from './pages/Kemitraan';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<ProductList />} />
            <Route path="/produk/:slug" element={<ProductDetail />} />
            <Route path="/kemitraan" element={<Kemitraan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
