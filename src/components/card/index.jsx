import { Link } from "react-router-dom";

import "./card.scss";

const Card = (props) => {

    const imgSrc = `assets/${props.itemType}/${props.id}.png`;
    const detailRoute = `${props.itemType}/${props.id}`;

    return (
        <div className="Card">
            <div className="Card__img_container">
                <img src={imgSrc}
                    alt={`${props.name} image.`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = "assets/No_image_available.png";
                    }}
                />
            </div>
            <div className="Card__description">
                <h2>{props.name}</h2>
                <div>
                    <div>Information that could be added to the request</div>
                    <Link to={detailRoute}>More info</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;