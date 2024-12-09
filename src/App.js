import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from './Component/About/About';
import Shop from './Component/Shop/Shop';
import Footer from './Component/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/about' element={<About />} />
    <Route path='/shop' element={<Shop />} />
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
