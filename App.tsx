import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import ProductList from './pages/ProductList.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import Kemitraan from './pages/Kemitraan.tsx';

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