import './Adds.css';
import img1 from '../../../Assets/Img/food_01.jpg';
import img2 from '../../../Assets/Img/meet.jpg';

export default () => {
    return (
        <div className="container marketing">
            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Different Cultures</h2>
                    <p className="lead">Some great foods to eat.</p>
                </div>
                <div className="col-md-5" id="img_food">
                    <img src={img1} className="d-block w-100" alt="Eating food" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Meet new people</h2>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src={img2} id="img_meet" className="d-block w-100" alt="Eating food" />
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    );
}