import React from 'react';
import '../../assests/CSS/Home/Products.css'; 
import Dosa from "../../assests/Images/dosa.jpg";
import Food from "../../assests/Images/food.jpg";
import Biryani from "../../assests/Images/biryani.jpg";


const Products = () => {
  const product = [
    {
      id: 1,
      name: 'Dosa',
      price: '₹ 200',
      image: Dosa, 
    },
    {
      id: 2,
      name: 'Panner',
      price: '₹ 100',
      image: Food, 
    },
    {
      id: 3,
      name: 'Biryani',
      price: '₹ 150',
      image: Biryani,
    },
  ];

  return (
    <div className="product-container">
      {/* Heading */}
      <div className="product-header">
        <h1>Discover Fresh and Quality Food</h1>
        <p>Enjoy a wide variety of fresh, delicious, and healthy food options, carefully curated for your satisfaction </p>
      </div>

      {/* Product Cards */}
      <div className="product-card-grid">
        {product.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-card-image" />
            <h2>{product.name}</h2>
            <p className="product-prices">{product.price}</p>
            <p>Per Kg</p>
            <button className="product-add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
