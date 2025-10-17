import React, { useState, useEffect } from 'react';
import './WelcomePopup.css';
import { X } from 'lucide-react';
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupDismissed');
    if (!popupShown) setIsVisible(true);
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem('username', user.displayName);
      localStorage.setItem('email', user.email);
      localStorage.setItem('photo', user.photoURL);

      sessionStorage.setItem('popupDismissed', 'true');
      setIsVisible(false);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleClose = () => {
    sessionStorage.setItem('popupDismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="popup-form"
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{
              duration: 0.6,
              type: 'spring',
              stiffness: 120,
            }}
          >
            <motion.button
              className="close-btn"
              onClick={handleClose}
              whileHover={{ rotate: 90, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <X size={20} />
            </motion.button>

           

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Welcome to <span>SNEAKX</span>
            </motion.h2>

            <motion.button
              className="signup-btn"
              onClick={handleGoogleLogin}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign in with Google
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
