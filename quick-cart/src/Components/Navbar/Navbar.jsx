import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [tab, setTab] = useState("shop");
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <p>Quick Cart</p>
      </div>
      <ul className="tabs">
        <li
          onClick={() => {
            setTab("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {tab === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setTab("electronics");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/electronics">
            Electonics
          </Link>
          {tab === "electronics" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setTab("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {tab === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setTab("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {tab === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setTab("aboutus");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/aboutus">
            About Us
          </Link>
          {tab === "aboutus" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button name="Login">Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
        <div className="items-counter">0</div>
      </div>
    </div>
  );
};

export default Navbar;
