import React from "react";
import Navbar from '../../Components/Navbar/Navbar';
import './Contato.css';

export default () => {
    return (
        <>
            <Navbar></Navbar>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 mr-auto">
                            <h2>Contact Us</h2>
                            <p class="mb-5">Send an email to us to get more info.</p>
                            <ul class="list-unstyled pl-md-5 mb-5">
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
                                            placeholder="First name"/>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <input type="text" class="form-control" name="lname" id="lname"
                                            placeholder="Last name"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <input type="text" class="form-control" name="email" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <textarea class="form-control" name="message" id="message" cols="30" rows="7"
                                            placeholder="Write your message"></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="submit" value="Send Message"
                                            class="btn_Contato btn-primary rounded-0 py-2 px-4"/>
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