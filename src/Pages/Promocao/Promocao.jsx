import React from "react";
import Navbar from '../../Components/Navbar/Navbar';
import './Promocao.css';
import Card from '../../Components/Promotion_Cards/Destiny_Cards';
import Rio from '../../Assets/Img/rio_de_janeiro.jpg';
import Moscow from '../../Assets/Img/Moscow.jpg';
import India from '../../Assets/Img/India_01.jpg';
import China from '../../Assets/Img/China.jpg';
import Rome from '../../Assets/Img/Rome-italy.jpeg';
import Egypt from '../../Assets/Img/egypt.jpg';

export default () => {
    return (
        <>
            <Navbar></Navbar>
            <h1 className=" " id="titulo">On Sale!</h1>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Card foto={Rome} Lugar={"Rome"} preco={"$2500"} time={"7 min left"}></Card>
                        <Card foto={Egypt}Lugar={"Egypt"} preco={"$7000"} time={"25 min left"}></Card>
                        <Card foto={Moscow} Lugar={"Moscow"} preco={"$5500"} time={"12 min left"}></Card>
                        <Card foto={India} Lugar={"India"} preco={"$3300"} time={"30 min left"}></Card>
                        <Card foto={Rio} Lugar={"Rio de Janeiro"} preco={"$800"} time={"9 min left"}></Card>
                        <Card foto={China} Lugar={"China"} preco={"$6500"} time={"5 min left"}></Card>
                    </div>
                </div>
            </div>
        </>
    );
}