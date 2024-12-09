import React from 'react';
import '../../assests/CSS/Home/Sale.css';
import { Link } from 'react-router-dom';

const Sale = () => {
  return (
    <div className="banner-container">
      <div className="sale-text-container">
        <h1>Big Discounts Await!</h1>
        <p>with big <span className="highlight-text">Discount...</span></p>
        <h2>Sale! Upto <span className="discount-text">50%</span> off</h2>
        <Link to="/shop">
          <button className="sale-shop-btn">Shop Now</button>
        </Link>
      </div>
      
      <div className="sale-image-container">
        <img 
          src="https://img.freepik.com/premium-photo/front-view-burger-with-french-fries-cold-drink_94574-4599.jpg" 
          alt="December Sale" 
        />
      </div>
    </div>
  );
}

export default Sale;

