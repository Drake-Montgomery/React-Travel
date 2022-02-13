import React from "react";
import Navbar from '../../Components/Navbar/Navbar';
import './Destino.css';
import travel from '../../Assets/Img/bags__destiny.jpg'
export default () => {
    return (
        <>
            <Navbar />
            <div class="content">
                <div class="container">
                    <h2 id="titulo2">Agende sua Viagem</h2>
                    <div class="row">
                        <div class="col-md-5 mr-auto">
                            <ul class="list-unstyled pl-md-5 mb-5">
                                <li class="d-flex text-black">
                                    <img src={travel} className="d-block w-100" alt="Dubai" />
                                </li>
                                <li class="d-flex text-black"><span class="mr-3">
                                    <span class="icon-envelope-o"> </span></span>
                                    drakesolight@gmail.com
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-7 mb-5 mb-lg-0">
                            <form class="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" name="fname" id="fname"
                                            placeholder="First name" />
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" name="lname" id="lname"
                                            placeholder="Last name" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input type="Password" class="form-control" name="Password" id="email" placeholder="Password" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" name="to" id="email" placeholder="From: (US - Los Angeles)" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" name="From" id="email" placeholder="To: (CA - Toronto)" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="submit" value="Cadastrar"
                                            class="btn_Contato btn-primary rounded-0 py-2 px-4" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}