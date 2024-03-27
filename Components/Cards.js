import React from "react";
import Card from "./Card";
import "../CSS/menu.css";

 function Cards(props){
    return(
        <div  className="card">
            <img src={props.image}/>
            <i><h1>{props.title}</h1></i>
            <a href="#" ><p>Rs-{props.price}</p></a>
            <button  >Order</button>

        </div>
    )
}

export default Cards;