import React from "react";
import Navbar from '../../Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Cards from './Cards/Cards';
import Adds from './Adds/Adds';

export default () => {
    return (
        <>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Cards></Cards>
            <Adds></Adds>
        </>
    );
}