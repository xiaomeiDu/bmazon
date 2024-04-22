import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Project.css";
import { Link } from "react-router-dom";

const Cart = () => {
  // Get necessary functions and state from CartContext
  const { cart, updateQuantity, removeProduct, totalPrice } =
    useContext(CartContext);

  // Handle quantity change for a product
  const handleQuantityChange = (productId, change) => {
    updateQuantity(productId, change);
  };

  // Handle removing a product from the cart
  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <div>
          <Link to="/" className="back-to-products">
            Go to Home Page
          </Link>
        </div>
      </div>
      {/* Check if cart is empty and display message or render cart items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {/* Map over cart items and render each item */}
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="item-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="item-details">
                  <h3>{product.title}</h3>
                  <p className="item-price">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <div className="item-quantity">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleQuantityChange(product.id, 1)}>
                      +
                    </button>
                  </div>
                  <p className="item-total">
                    Total: ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            {/* Display subtotal */}
            <h3 className="subtotal">Subtotal: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
