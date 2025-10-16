import React, { useState, useEffect } from 'react';
import './WelcomePopup.css';
import { X } from 'lucide-react';
import { auth, provider } from '../Firebase'; // go up one folder from components/
import { signInWithPopup } from 'firebase/auth';


const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false); // default false

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupDismissed');
    if (!popupShown) {
      setIsVisible(true); // show if not dismissed before
    }
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store info in localStorage
      localStorage.setItem('username', user.displayName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('photo', user.photoURL);

      sessionStorage.setItem('popupDismissed', 'true');
      setIsVisible(false);

      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleClose = () => {
    sessionStorage.setItem('popupDismissed', 'true'); // persist dismissal
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

        {/* Google Sign-In Button */}
        <button className="signup-btn" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
