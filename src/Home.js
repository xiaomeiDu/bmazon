import React from "react";
import "./Home.css";
import ProductList from './component/ProductList';
import Product from "./component/Product"; // Adjust the path as necessary

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Home;
