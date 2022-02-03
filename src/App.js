import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Cards from './Components/Cards/Cards';
import Adds from './Components/Pages/Home/Adds/Adds';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Cards></Cards>
      <Adds></Adds>
    </>
  );
}

export default App;