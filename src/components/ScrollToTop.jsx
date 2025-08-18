import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom"; //new import

function ScrollToTop() {
  const [direction, setDirection] = useState("up"); 
  const [visible, setVisible] = useState(false); 
  const [atBottom, setAtBottom] = useState(false); 
  const lastScrollY = useRef(0);
  const location = useLocation(); //get current route

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      setVisible(currentScrollY > 0);
      setAtBottom(currentScrollY + windowHeight >= scrollHeight);

      if (currentScrollY > lastScrollY.current) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setDirection("up");
      }

      lastScrollY.current = Math.max(currentScrollY, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (direction === "up" || atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  //Hide button only on Searchproduct page
if (
  location.pathname === "/searchproduct" ||
  location.pathname.startsWith("/cartitem") ||
  !visible
) {
  return null;
}



  return (
    <button onClick={handleClick} className="scroll-to-top">
      <Icon
        icon={direction === "up" || atBottom ? "mdi:arrow-up" : "mdi:arrow-down"}
        width={24}
        height={24}
      />
    </button>
  );
}

export default ScrollToTop;
