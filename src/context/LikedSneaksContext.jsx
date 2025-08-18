// src/context/LikedSneaksContext.jsx
import { createContext, useState, useEffect } from "react";

export const LikedSneaksContext = createContext();

export const LikedSneaksProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState(() => {
    const storedLikes = localStorage.getItem("likedItems");
    try {
      // 👇 Make sure stored JSON is valid
      const parsed = storedLikes ? JSON.parse(storedLikes) : [];
      return Array.isArray(parsed) ? parsed.map(Number) : [];
    } catch (e) {
     console.warn("Invalid likedItems in localStorage. Resetting. Error:", e);

      return [];
    }
  });

  // 💾 Save to localStorage when likedItems change
  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  // ❤️ Toggle like status
  const toggleLike = (id) => {
    const numericId = Number(id);
    setLikedItems((prev) =>
      prev.includes(numericId)
        ? prev.filter((item) => item !== numericId)
        : [...prev, numericId]
    );
  };

  return (
    <LikedSneaksContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikedSneaksContext.Provider>
  );
};
