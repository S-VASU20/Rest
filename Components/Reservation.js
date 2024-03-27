import React from "react";
import "../CSS/reservation.css"
const Reservation=()=>{
    return(
        <div className="Rest">
            <div className="content">
                <div className="form-containers">
                    <form>
                        <h1><span>RESERVE</span>NOW!</h1>
                        <div>
                            <label>NAME</label>
                            <input type="text" placeholder="Enter your name"/>                            
                        </div>
                        <div>
                            <label>TABLE NO</label>
                            <input type="number" placeholder="Choose your Table no"/>                            
                        </div>
                        <div>
                            <label>TIME</label>
                            <input type="time" placeholder="Enter Time"/>                            
                        </div>
                        <div>
                            <label>MESSAGE</label>
                            <textarea rows="10" placeholder="Enter your suggestion"/>                            
                        </div>
                        <button className="cs" type="button">RESERVE  NOW!</button>
                    </form>

                </div>

            </div>
          
        </div>
    )
}
export default Reservation;