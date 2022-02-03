import React from "react";

export default (props) => {
    return (
        <>
            <div class="card shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <image href="Img/rio_de_janeiro.jpg" style="width: 100%;" alt="Moscow" />
                </svg>
                <div class="card-body">
                    <p class="card-text">Rio de Janeiro</p>
                    <h1 class="card-title pricing-card-title"><a href="./Cadastrar" class="preco">$800</a><small
                        class="text-muted fw-light"></small></h1>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">9 mins left</small>
                    </div>
                </div>
            </div>
        </>
    );
}