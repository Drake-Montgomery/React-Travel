import React from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Cards from './Cards/Cards';
import Adds from './Adds/Adds';

export default () => {
    return (
        <>
        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08"/>

            <Navbar />
            <Carousel />
            <Cards />
            <Adds />
        </>
    );
}