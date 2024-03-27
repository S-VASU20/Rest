import React from "react";
import "../CSS/reservation.css"
const Contact=()=>{
    return(
        <div>
            <div className="Rest">
            <div className="content">
               <div className="form-containers">
                    <form>
                        <h1><span>CONTACT-US</span>NOW!</h1>
                        <div>
                            <label>NAME</label>
                            <input type="text" placeholder="Enter your name"/>                            
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="Email" placeholder="Enter your  Email id"/>                            
                        </div>                        
                        <div>
                            <label>MESSAGE</label>
                            <textarea rows="10" placeholder="Enter your suggestion"/>                            
                        </div>
                        <button className="cs" type="button">SUBMIT</button>
                    </form>

                </div>

            </div>
          
        </div>
            
        </div>
    )
}
export default Contact;