import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "../Project.css";

function Product({ id, title, image, price }) {
  const { addToCart } = useContext(CartContext);
  const [adding, setAdding] = useState(false); // New state to track if we are currently adding the item

  const handleAddToCart = () => {
    console.log(`Adding product id ${id} to cart`);
    setAdding(true); // Disable the button to prevent multiple clicks

    addToCart({ id, title, image, price });

    // Assuming addToCart updates the state synchronously or there is some other indicator
    // when the cart has been updated, we reset the 'adding' state to false.
    setAdding(false); // Re-enable the button after adding to cart
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <p className="price">${price}</p>
        <button onClick={handleAddToCart} disabled={adding}>
          {adding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Product;
