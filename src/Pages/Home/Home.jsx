import React from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Carousel from '../../Components/Carousel/Carousel';
import Cards from '../../Components/Cards/Cards';
import Adds from '../../Components/Adds/Adds';

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