import React from "react";
import { Link } from 'react-router-dom';
import "../../assests/CSS/Home/Style.css";
import Food from "../../assests/Images/Foods.jpg";

const Style = () => {
  return (
    <>
    <div className="style-container">
      {/* First div with Image */}
      <div className="image-container">
        <img src={Food} alt="Fruit Basket" className="responsive-image"/>
      </div>

      {/* Second div with Text */}
      <div className="text-container">
        <p className="since-years">Since Year 2024</p>
        <h1 className="headingss">
          We are <span className="brand-name">DineDash</span>
        </h1>
        <p className="description">
        Welcome to a world where taste meets quality. At our food website, we believe that every bite should be a burst of flavor, combining freshness and authentic ingredients. We bring you a wide selection of dishes prepared with the utmost care, ensuring that every meal delivers the perfect balance of taste and nutrition. Whether you're craving something sweet, spicy, or savory, we have something to tantalize your taste buds.
        </p>
        <Link to="/about">
          <button className="sale-shop-btn">Know More</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Style;
