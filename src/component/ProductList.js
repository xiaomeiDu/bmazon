import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import axios from "axios";
import Product from "./Product";
import noResultsImage from "../assets/noresults.png";
import "../Project.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { searchQuery = "" } = useContext(SearchContext); // Add default value

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))
      ) : (
        <img
          src={noResultsImage}
          alt="No Results"
          className="no-results-image"
        /> // Show the "No Results" image if no products are found
      )}
    </div>
  );
}

export default ProductList;
