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
import Footer from "./component/Footer";

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CategoryProvider>
        <SearchProvider>
          <CartProvider>
            <Router>
              <Header />
              <div style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </div>
              <Footer />
            </Router>
          </CartProvider>
        </SearchProvider>
      </CategoryProvider>
    </div>
  );
}

export default App;