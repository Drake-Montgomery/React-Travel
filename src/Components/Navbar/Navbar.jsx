import './Navbar.css';
import { Link } from "react-router-dom";
import React from "react";


export default () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-0">
            <div className="container-fluid">
                <Link to="/">
                    <a className="navbar-brand">Drake's Travel'O Light <i className="fa fa-plane" aria-hidden="true"></i></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link to="/">
                                <a className="nav-link text-light"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"><i className="fas fa-suitcase"></i> Destinos</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/Promocao">
                                <a className="nav-link text-light"><i className="fas fa-tags"></i> Promoções</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light"><i className="fas fa-envelope"></i> Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}