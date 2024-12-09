// Home.jsx
import React from 'react';
import "../../assests/CSS/Home/HeroSection.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Food1 from "../../assests/Images/food1.jpg";
import Food2 from "../../assests/Images/food2.jpg";
import Food3 from "../../assests/Images/food3.jpg";
import Food4 from "../../assests/Images/food4.jpg";
import Food5 from "../../assests/Images/food5.jpg";
import Food6 from "../../assests/Images/food6.jpg";
import Food7 from "../../assests/Images/food7.jpg";



const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1,
    arrows: false, // Remove arrows if you want
  };

  const carouselImages = [
    { id: 1, src: Food1, alt: 'Delicious Food 1' },
    { id: 2, src: Food2, alt: 'Delicious Food 2' },
    { id: 3, src: Food3, alt: 'Delicious Food 3' },
    { id: 4, src: Food4, alt: 'Delicious Food 4' },
    { id: 5, src: Food5, alt: 'Delicious Food 5' },
    { id: 6, src: Food6, alt: 'Delicious Food 6' },
    { id: 7, src: Food7, alt: 'Delicious Food 7' },
  ];

  return (
    <>
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImages.map((image) => (
            <div key={image.id} className="carousel-item">
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default HeroSection;