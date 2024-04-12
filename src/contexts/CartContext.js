import React, { useState, createContext, useEffect, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage on component mount
  const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };

  // Save cart data to localStorage when cart state changes
  const saveCartToStorage = useCallback(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    loadCartFromStorage();
  }, []);

  useEffect(() => {
    saveCartToStorage();
  }, [saveCartToStorage]);

  // Add a product to the cart
  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    setCart((currentCart) => {
      const existingProductIndex = currentCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...currentCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, change) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  // Remove a product from the cart
  const removeProduct = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, currentItem) => total + currentItem.price * currentItem.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeProduct,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};