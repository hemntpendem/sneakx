import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navmobile = ({ closeNav }) => {
  // Disable body scroll when mounted, re-enable when unmounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close when clicking on overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("navmobile-overlay")) {
      closeNav();
    }
  };

  return (
    <div className="navmobile-overlay" onClick={handleOverlayClick}>
      <div className="navmobile-sidebar">
        <h1 className="logo1" onClick={closeNav}>SNEAKX</h1>
        <button className="close-btn" onClick={closeNav}>
          <FaTimes />
        </button>
      
        <NavLink to="/" onClick={closeNav} className="nav-link">HOME</NavLink>
        <NavLink to="/collection" onClick={closeNav} className="nav-link">COLLECTION</NavLink>
        <NavLink to="/men" onClick={closeNav} className="nav-link">FOR HIM</NavLink>
        <NavLink to="/women" onClick={closeNav} className="nav-link">FOR HER</NavLink>
        <NavLink to="/kids" onClick={closeNav} className="nav-link">FOR KIDS</NavLink>
        
        <p>
          Become a Sneakx Member for the best products, inspiration and stories in fashion.
          <a href="#learnmore">Learn more</a>
        </p>
        <button type="submit" className="joinus">join us</button>
        <button type="button" className="signup">Sign in</button>
      </div>
    </div>
  );
};

export default Navmobile;
