import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
  const [tab,setTab] = useState("")
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt=""/>
        <p>Quick Cart</p>
      </div>
      <ul className="tabs">
        <li onClick={()=>{setTab("grocery")}}>Grocery{ tab === 'grocery'? <hr/>:<></>}</li>
        <li onClick={()=>{setTab("electronics")}}>Electronics { tab === 'electronics'? <hr/>:<></>}</li>
        <li onClick={()=>{setTab("mens")}}>Men { tab === 'mens'? <hr/>:<></>}</li>
        <li onClick={()=>{setTab("womens")}}>Women { tab === 'womens'? <hr/>:<></>}</li>
        <li  onClick={()=>{setTab("aboutus")}}>About US  { tab === 'aboutus'? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button name='Login'>Login</button>
        <img src={cart} alt=""/>
        <div className="items-counter">
          0
        </div>
      </div>
    </div>
  )
}

export default Navbar
