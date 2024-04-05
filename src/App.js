import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './component/Header';
import ProductList from './component/ProductList';
import Product from "./component/Product";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} /> {/* Assuming have individual product pages */}
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
