import React from "react";
import TwitterIcon from "@" 


function Footer(){
    return(
       <footer>
        <div className="foot">
            <div className="footer">
                <h3>CONTACT-US</h3>
                <p>Email:info@example.com</p>
                <p>Phone:+91000000000</p>
                <p>Address:gopalnagar tk street</p>

            </div>
            <div className="footer">
                <h3>QUICK LINKS</h3>
                <ul className="list">
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">About-us</a></li>
                </ul>
            </div>
            <div className="footer">
                <h3>FOLLOW-US</h3>

            </div>
            <div className="bottom">
                <p>&copy; all right reserved</p>

            </div>

        </div>
       </footer>
    )
}
export default Footer