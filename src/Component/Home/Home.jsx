import React from 'react';
import "../../assests/CSS/Home/Home.css";
import HeroSection from './HeroSection';
import Shiping from './Shiping';
import Products from './Products';
import Sale from './Sale';
import Style from "./Style";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Shiping />
            <Products />
            <Sale />
            <Style />
        </>
    )
}


export default Home;