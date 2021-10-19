import React from 'react';
import './App.css';
import Navbar from './Component/Navbar.js';
import Body from './Component/Body.js';
import Footer from './Component/Footer.js';
import Carousel1 from'./Component/react-carousel-component-master/src/Carousel';






function App(){
  return(
    <div>
      <Navbar />
      <Body />
      <Carousel1 />
      <Footer /> 
      
    </div>
  );
}
export default App




