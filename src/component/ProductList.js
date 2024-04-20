import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { CategoryContext } from '../contexts/CategoryContext';
import axios from "axios";
import Product from "./Product";
import noResultsImage from "../assets/noresults.png";
import "../Project.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchQuery = "" } = useContext(SearchContext);
  const { categoryFilter } = useContext(CategoryContext);

  useEffect(() => {
    // Adjust the URL based on the categoryFilter
    let apiUrl = "https://fakestoreapi.com/products";
    if (categoryFilter) {
      apiUrl += `/category/${categoryFilter}`;
    }

    setIsLoading(true); // Set loading to true when starting a new request
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false once the request is completed
      });
  }, [categoryFilter]); // Depend on categoryFilter to re-fetch when it changes

  // Search filtering logic remains the same
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {isLoading ? (
        <div className="loader"></div> // Loader indication
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))
      ) : (
        <img
          src={noResultsImage}
          alt="No Results"
          className="no-results-image"
        /> // Display 'No Results' when filter yields no products
      )}
    </div>
  );
}

export default ProductList;
