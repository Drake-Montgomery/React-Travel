import './Carousel.css';
import img1 from '../../Assets/Img/Dubai.jpg';
import img2 from '../../Assets/Img/Golden_gate.jpg';
import img3 from '../../Assets/Img/greece.JPG';
import { Link } from "react-router-dom";

export default () => {
    return (
        <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1">
                </button>

                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="">
                </button>

                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                    className="active" aria-current="true">
                </button>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="Dubai"/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Explore Dubai</h1>
                                <p>Have you ever see The biggest build in the world ?</p>
                                <Link to="/Promocao">
                                <p><a className="btn btn-lg btn-primary" href="#">More info</a></p>
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="Golden Gate"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>San Francisco</h1>
                                <p>The iconic Golden Gate Bridge is waiting for you</p>
                                <Link to="/Promocao">
                                <p><a className="btn btn-lg btn-primary" href="#">More info</a></p>
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="Greece "/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Uncover the stories of Greece</h1>
                                <p>Visit one of the oldest cities in the world</p>
                                <Link to="/Promocao">
                                <p><a className="btn btn-lg btn-primary" href="#">More info</a></p>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}