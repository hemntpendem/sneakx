// context/ScrollContext.js
import { createContext, useContext, useRef, useEffect, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const updateScroll = () => {
    if (containerRef.current) {
      setScrollY(containerRef.current.scrollTop);
    }
  };

  return (
    <ScrollContext.Provider value={{ containerRef, scrollY, updateScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
