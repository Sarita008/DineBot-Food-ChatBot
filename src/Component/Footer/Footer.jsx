// Footer.js
import React from 'react';
import '../../assests/CSS/Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Condition</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Street, India</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
        </div>
        <div className="footer-section">
          <h3>Opening</h3>
          <p>Monday - Saturday: 09AM - 09PM</p>
          <p>Sunday: 10AM - 08PM</p>
        </div>
        <div className="footer-section newsletter">
          <h3>Let's Stay Connected</h3>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">SIGNUP</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Copyright by DineDash. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
