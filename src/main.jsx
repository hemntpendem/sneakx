import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LikedSneaksProvider } from "./context/LikedSneaksContext";
import { CartProvider } from "./context/CartContext";
import { ScrollProvider } from './context/ScrollContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
   <LikedSneaksProvider>
    <CartProvider>
  <ScrollProvider>
    <App />
    </ScrollProvider>
    </CartProvider>
    </LikedSneaksProvider>
   
    </BrowserRouter>
    
  </StrictMode>,
)
