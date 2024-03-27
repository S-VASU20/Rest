import React from "react";

function Card ({
    Imgsrc,imgalt,title,price,button
}){
    return(
        <div className="Vasu1">
            <img src={Imgsrc} alt={imgalt} className="cardimg"/>
            <h1 className="title">{title}</h1>
            <p className="price">{price}</p>
            <button className="self">{button}</button>

        </div>
    )

}
export default Card;