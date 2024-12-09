// Navbar.jsx
import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { RiLoginCircleLine } from 'react-icons/ri';
import "../../assests/CSS/Navbar/Navbar.css";
import Logo from "../../assests/Images/logo.webp";

const Navbar = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt='logo' />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/shop">Shop</a>
      </div>
      <div className="nav-icons">
        <div className="iconss" onClick={toggleLoginOptions}>
          <RiLoginCircleLine />
        </div>
        {showLoginOptions && (
          <div className="login-dropdown">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        )}
        <div className="iconss"><FaHeart /></div>
        <div className="iconss"><FaShoppingCart /></div>
      </div>
    </nav>
  );
};

export default Navbar;
