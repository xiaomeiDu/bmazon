import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      {cart.map((item, index) => (
        <div key={index} className="cartItem">
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          {/* Add quantity and other details here */}
        </div>
      ))}
    </div>
  );
}

export default Cart;
