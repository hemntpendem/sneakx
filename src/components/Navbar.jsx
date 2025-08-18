import React, { useContext, useEffect,useState  } from "react";
import { FaBars, FaHeart, FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { Link, NavLink} from "react-router-dom";
import gsap from "gsap";
import { CartContext } from "../context/CartContext";
import Navmobile from "./Navmobile";


const Navbar = () => {

 const [showMobileNav, setShowMobileNav] = useState(false);

  const { cartItems } = useContext(CartContext);
  // Navbar scroll animation
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        gsap.to(nav, { y: -100, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(nav, { y: 0, duration: 0.5, ease: "power2.out" });
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* navbar container */}
      <nav className="navbar">

        {/* navbar left */}
        <div className="nav-left">
          <NavLink
            className={({ isActive }) => (isActive ? "menu active" : "menu")}
             onClick={() => setShowMobileNav(true)}>
            <FaBars />
            </NavLink>

          <Link to="/">
            <span className="logo">SNEAKX</span>
          </Link>
        </div>

        {/* navbar center */}
        <div className="nav-center">
          <div className="nav-links">
         
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              HOME
            </NavLink>
            <NavLink to="/collection" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              COLLECTION
            </NavLink>
            <NavLink to="/men" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              FOR HIM
            </NavLink>
            <NavLink to="/women" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              FOR HER
            </NavLink>
            <NavLink to="/kids" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              FOR KIDS
            </NavLink>
            
          </div>
        </div>

    

        {/* navbar right */}
        <div className="nav-right">
          <NavLink to="/searchproduct" className={({ isActive }) => (isActive ? "nav-searchbutton active" : "nav-searchbutton")}>
            <FaSearch />
          </NavLink>
          <NavLink to="/liked" className={({ isActive }) => (isActive ? "fav active" : "fav")}>
            <FaHeart />
          </NavLink>
          <div className="cart-wrapper">
         <NavLink
          to="/cart"
          className={({ isActive }) =>
          isActive ? "cart active" : "cart"
          }>
         <FaShoppingBag />
         </NavLink>
          {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>)}
       </div>

          <NavLink to="/user"   
          className={({ isActive }) =>
          isActive ? "user active" : "user"}>
           <FaUserCircle />
          </NavLink>
        </div>

      </nav>
      
       {/* Renders mobile nav if open */}
      {showMobileNav && (
        <Navmobile closeNav={() => setShowMobileNav(false)} />
      )}
    </div>
  );
};

export default Navbar;
