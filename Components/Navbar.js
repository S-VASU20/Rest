import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar=()=>{
    return(
        <header>
            <div className="container container-flex" >
            <div className="LOGO">
                <img src="https://static.vecteezy.com/system/resources/previews/009/291/628/non_2x/restaurant-logo-design-vector.jpg" alt="Logo" className="img"/>              
            </div>
            <nav>
                <div className="vasu">
                    <NavLink exact to ="/" className= "list">Home</NavLink>
                    <NavLink to ="/menu" className= "list">Menu</NavLink>
                    <NavLink to ="/reservation" className= "list">Reservation</NavLink>
                    <NavLink to ="/gallery" className= "list">Gallery</NavLink>
                    <NavLink to ="/about" className= "list">About</NavLink>
                    <NavLink to ="/contact" className= "list">Contact</NavLink>
                </div>
            </nav>

        </div>
        </header>
    )
}
export default Navbar;