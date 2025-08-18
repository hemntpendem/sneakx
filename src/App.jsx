
import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Collection from './components/Collection'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Navbar from './components/Navbar'
import Searchproduct from './components/Searchproduct'
import Liked from './components/Liked';
import Cart from './components/Cart';
import CartItem from './components/CartItem'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import WelcomePopup from './components/WelcomePopup';
import AccountPage from './components/AccountPage'
import ScrollToTop from './components/ScrollToTop'


function App() {
 

  return (
    <div className='reactfrag'>
    
    <Navbar/>
  
     <WelcomePopup />
      <Routes>
     
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/men' element={<Men />}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids />}/>
        <Route path='/searchproduct' element={<Searchproduct />}/>
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartitem/:id" element={<CartItem />} />
        <Route path="/user" element={<AccountPage />} />
        {/* <Route path="*" element={<div className='wrongroute'><span className='error'>404 </span>- Page Not Found<br />Go back <a href="/">home</a></div>} /> */}

      </Routes>
      
   


          <ScrollToTop />
        <ToastContainer position="bottom-right" autoClose={2000} theme="dark" />

      
    </div>
  )
}

export default App
