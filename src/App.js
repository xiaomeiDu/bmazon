import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./component/Header";
import ProductList from "./component/ProductList";
import Product from "./component/Product";
import { CartProvider } from "./contexts/CartContext";
import { SearchProvider } from "./contexts/SearchContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import Cart from "./component/Cart";

function App() {
  return (
    <CategoryProvider>
      <SearchProvider>
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </CartProvider>
      </SearchProvider>
    </CategoryProvider>
  );
}

export default App;
