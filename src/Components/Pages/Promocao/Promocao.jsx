import React from "react";
import Navbar from '../../Navbar/Navbar';
import './Promocao.css';

export default () => {
    return (
        <>
            <Navbar></Navbar>
            <h1 className="fw-light" style="text-align:center;">On Sale!</h1>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <image href="Img/rio_de_janeiro.jpg" style="width: 100%;" alt="Moscow" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">Rio de Janeiro</p>
                                    <h1 className="card-title pricing-card-title"><a href="./Cadastrar" className="preco">$800</a><small
                                        className="text-muted fw-light"></small></h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">9 mins left</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <image href="Img/Moscow.jpg" style="width: 100%;" alt="Moscow" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">Moscow</p>
                                    <h1 className="card-title pricing-card-title"><a href="./Cadastrar" className="preco">$7500</a><small
                                        className="text-muted fw-light"></small></h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">12 mins left</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <image href="Img/India_01.jpg" style="width: 100%;" alt="India" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">India</p>
                                    <h1 className="card-title pricing-card-title"><a href="./Cadastrar" className="preco">$1500</a><small className="text-muted fw-light"></small></h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">30 mins left</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <image href="./Img/China.jpg" style="width: 100%;" alt="Moscow" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">China</p>
                                    <h1 className="card-title pricing-card-title"><a href="./Cadastrar" className="preco">$4500</a><small className="text-muted fw-light"></small></h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">5 mins left</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <image href="./Img/Rome-italy.jpeg" style="width: 100%;" alt="Rome" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">Rome</p>
                                    <h1 className="card-title pricing-card-title"><a href="./Cadastrar" className="preco">$2500</a><small className="text-muted fw-light"></small></h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">9 mins left</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                    role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c" />
                                    <image href="./Img/egypt.jpg" style="width: 100%;" alt="Egypt" />
                                </svg>
                                <div className="card-body">
                                    <p className="card-text">Egypt</p>
                                    <h1 className="card-title pricing-card-title"><a href="./Cadastrar" className="preco">$5000</a><small className="text-muted fw-light"></small></h1>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-muted">12 mins left</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}