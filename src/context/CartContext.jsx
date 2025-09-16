import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Safe localStorage parser + auto-cleaner
  const getStoredCart = () => {
    try {
      const stored = localStorage.getItem("cartItems");
      if (!stored) return [];
      const parsed = JSON.parse(stored);

      // Ensure it's an array of numbers (IDs)
      if (Array.isArray(parsed)) {
        return parsed.filter((id) => typeof id === "number");
      }
      return [];
    } catch (error) {
      console.warn("⚠️ Corrupted cart data in localStorage, resetting…", error);
      localStorage.removeItem("cartItems");
      return [];
    }
  };

  const [cartItems, setCartItems] = useState(getStoredCart);

  // Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product ID safely
  const addToCart = (id) => {
    if (!id || typeof id !== "number") {
      console.warn("❌ Tried to add invalid product ID:", id);
      return;
    }

    if (!cartItems.includes(id)) {
      setCartItems((prev) => [...prev, id]);
    }
  };

  // Remove product by ID
  const removeFromCart = (id) => {
    if (!id) return;
    setCartItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
