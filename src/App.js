import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./component/Header";
import ProductList from "./component/ProductList";
import Product from "./component/Product";
import { CartProvider } from "./contexts/CartContext";
import { SearchProvider } from './contexts/SearchContext';
import Cart from "./component/Cart";

function App() {
  return (
    <SearchProvider>
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} /> Assuming
          have individual product pages
          <Route path="/cart" element={<Cart />} />
          {/* other routes */}
        </Routes>
      </Router>
    </CartProvider>
    </SearchProvider>
  );
}

export default App;
