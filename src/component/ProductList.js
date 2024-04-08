import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from '../contexts/SearchContext';
import axios from "axios";
import Product from "./Product";
import "../Project.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { searchQuery } = useContext(SearchContext);

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

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
