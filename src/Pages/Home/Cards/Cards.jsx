import card1 from '../../../Assets/Img//ticket.jpg';
import card2 from '../../../Assets/Img/London_by_Night.jpg';
import card3 from '../../../Assets/Img/losangeles.jpg';
import './Cards.css';

export default () => {
    return (
        <div className="container marketing">
            <div className="row">

                <div className="col-lg-4 col-md-5 vv profile-circel-image-200">
                    <img className="img-fluid rounded-circle" alt="airport_guy" id="img_1" src={card1} data-holder-rendered="true" />

                    <h5 className="mb-3 mt-5">We've got your back</h5>

                    <p>Don't waste your time in line, take your VIP Ticket</p>

                    <p><a className="btn btn-secondary" href="./Destino">View details &raquo;</a></p>
                </div>

                <div className="col-lg-4 col-md-5 vv profile-circel-image-200">
                    <img className="img-fluid rounded-circle" alt="airport_guy" id="img_1" src={card2} data-holder-rendered="true" />
                    <h5 className="mb-3 mt-5">See a brand new world</h5>
                    <p>Enjoy the cold weather of London and the famous Pub's</p>
                    <p><a className="btn btn-secondary" href="./">View details &raquo;</a></p>
                </div>

                <div className="col-lg-4 col-md-5 vv profile-circel-image-200">
                    <img className="img-fluid rounded-circle" alt="airport_guy" id="img_1" src={card3} data-holder-rendered="true" />
                    <h5 className="mb-3 mt-5">Los Angeles -The city of Angels</h5>
                    <p>Discover the 'Lux' of the city of angels</p>
                    <p><a className="btn btn-secondary" href="./">View details &raquo;</a></p>
                </div>

            </div>
        </div>
    );
}