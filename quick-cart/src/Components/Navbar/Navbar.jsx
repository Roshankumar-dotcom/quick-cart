import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" id='logo'/>
        <p>Quick Cart</p>
      </div>
      <ul className="tabs">
        <li>Basics</li>
        <li>Apperals</li>
        <li>Male</li>
        <li>Female</li>
        <li>About US</li>
      </ul>
      <div className="nav-login-cart">
        <button name='Login'></button>
        <img src={cart} alt="" />
      </div>
    </div>
  )
}

export default Navbar
