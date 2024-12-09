import React from "react";
import "../../assests/CSS/About/DineDashes.css"; 
import { FaDollarSign, FaBox } from 'react-icons/fa';
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import Foods from "../../assests/Images/Foods.jpg";


const DineDashs = () => {
  return (
    <div className="dine-dash-container">
      {/* First Div with heading, icons, and text */}
      <div className="info-container">
        <h2 className="heading">Why <span>DineDash</span></h2>

        {/* Row 1 */}
        <div className="row">
          <div className="info-item">
            <div className="icon-circle">
            <TbTruckDelivery className="icon" />
            </div>
            <div className="info-content">
              <h3>Home Delivery</h3>
              <p>
              At DineDash, we ensure fresh and delicious meals delivered straight to your door. Enjoy the convenience of fast, reliable home delivery, making your dining experience seamless and stress-free.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
            <FaDollarSign className="icon" />
            </div>
            <div className="info-content">
              <h3>Best Price</h3>
              <p>
              We believe great taste shouldn't break the bank. Enjoy top-quality meals at the best prices, ensuring you savor every bite without compromising on value.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="info-item">
            <div className="icon-circle">
            <FaBox className="icon" />
            </div>
            <div className="info-content">
              <h3>Custom Box</h3>
              <p>
              we believe in personalized dining experiences. Our custom box allows you to select your favorite ingredients, ensuring every meal is tailored to your taste. Enjoy freshness delivered!
              </p>
            </div>
          </div>

          <div style={{marginLeft:"50px"}} className="info-item">
            <div className="icon-circle">
            <FaArrowsRotate className="icon" />
            </div>
            <div className="info-content">
              <h3>Quick Refund</h3>
              <p>
              At DineDash, we prioritize your satisfaction. Enjoy our quick refund process, ensuring hassle-free returns and prompt refunds, so you can focus on what truly matters—delicious food!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Div with Image */}
      <div className="Dine-image-container">
        <img
          src={Foods} alt="fresh food" className="Dine-responsive-image"/>
      </div>
    </div>
  );
};

export default DineDashs;
