import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Kontrollera om vi är på klientsidan innan vi använder localStorage
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return []; // Om vi är på serversidan, returnera en tom array
  });

  const [total, setTotal] = useState(0);

  // Beräkna totalpris
  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  }, [cartItems]);

  // Spara varukorg i localStorage varje gång den uppdateras
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      console.log("Adding to cart:", product);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    console.log("Removing from cart:", id);
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      }
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
