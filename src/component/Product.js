import React from "react";
import Star from "@mui/icons-material/Star";
import "../Project.css";

function Product({ id, title, image, price, rating }) {
  const renderRating = () => {
    const stars = [];
    // Calculate the number of filled stars based on the rating rate
    const filledStars = Math.round(rating.rate);
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <div className="product-rating">{renderRating()}</div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
