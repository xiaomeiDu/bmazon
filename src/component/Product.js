import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import "../Project.css";

function Product({ id, title, image, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <p className="price">${price}</p>
        <button onClick={() => addToCart({ id, title, image, price })}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
