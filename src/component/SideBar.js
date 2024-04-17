import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CategoryContext } from '../contexts/CategoryContext';
import "../Home.css";

function Sidebar() {
  const [categories, setCategories] = useState([]);
  const { categoryFilter, setCategoryFilter } = useContext(CategoryContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories: ", error));
  }, []);

  const handleCheckboxChange = (category, isChecked) => {
    // If the checkbox is checked, update the category filter
    if (isChecked) {
      setCategoryFilter(category);
    } else {
      // If the checkbox is unchecked, check if any other checkboxes are checked
      // If none are checked, reset the category filter to show all products
      const checkboxes = document.querySelectorAll('.category__checkbox');
      const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
      if (!isAnyChecked) {
        setCategoryFilter('');
      }
    }
  };

  return (
    <div className="home__sidebar">
      <div className="sidebar__title">Category</div>
      {categories.map((category, index) => (
        <div key={index} className="category__item">
          <input
            type="checkbox"
            id={`category-${index}`}
            className="category__checkbox"
            checked={categoryFilter === category}
            onChange={(e) => handleCheckboxChange(category, e.target.checked)}
          />
          <label htmlFor={`category-${index}`} className="category__label">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
