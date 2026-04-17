

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/common/Navbar'; // import the shared navbar
import ScrollToTop from './components/ScrollToTop';
import Footer from './sections/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDisplayPage from './pages/ProductDisplayPage';
import './App.css';

// Create a component that uses useLocation inside BrowserRouter
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:slug" element={<ProductDisplayPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Navbar is fixed and overlays everything */}
      <Navbar />
      <div className="app-main">
        {/* Routes determines which page component to render based on the current URL */}
        <AnimatedRoutes />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
