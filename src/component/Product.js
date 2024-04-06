import React from "react";
import "../Project.css";

function Product({ id, title, image, price }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
