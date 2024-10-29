import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.unit === product.unit
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.unit === product.unit
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity }];
      }
    });
  };

  const updateCartItemQuantity = (productId, unit, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.unit === unit
          ? { ...item, quantity: parseInt(quantity, 10) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
