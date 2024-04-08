import React from "react";
import "./Home.css";
import ProductList from './component/ProductList';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row sidebar">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default Home;
