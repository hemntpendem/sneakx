import React, { useState, useEffect } from 'react';
import './WelcomePopup.css';
import { X } from 'lucide-react';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false); // default false

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coolMessage: '',
  });

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupDismissed');
    if (!popupShown) {
      setIsVisible(true); // only show if not dismissed before
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = (e) => {
  e.preventDefault();
  sessionStorage.setItem('popupDismissed', 'true'); 
  localStorage.setItem('username', formData.name); // 🔥 store name
  setIsVisible(false);
  console.log('Submitted:', formData);
};


  const handleClose = () => {
    sessionStorage.setItem('popupDismissed', 'true'); // persist the dismissal
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-backdrop">
      <div className="popup-form">
        <button className="close-btn" onClick={handleClose}>
          <X size={20} />
        </button>
        <h2>Welcome to <span>SNEAKX</span></h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="coolMessage"
            placeholder="Type Something Cool..."
            value={formData.coolMessage}
            onChange={handleChange}
          />
          <button type="submit">Let’s Go</button>
           <button type="button" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePopup;
