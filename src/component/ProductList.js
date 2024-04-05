import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "../Project.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
