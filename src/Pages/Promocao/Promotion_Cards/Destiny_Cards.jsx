import './Destiny_Cards.css';
import { Link } from "react-router-dom";


export default (props) => {
    return (
        <>
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <image id="img" href={props.foto}  alt="Moscow" />
                </svg>
                <div className="card-body">
                    <p className="card-text">{props.Lugar}</p>
                    <h1 className="card-title pricing-card-title"><Link to="/"><a className="preco">{props.preco}</a></Link><small
                        className="text-muted fw-light"></small></h1>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{props.time}</small>
                    </div>
                </div>
            </div>
        </>
    );
}