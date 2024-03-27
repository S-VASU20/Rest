import React from "react";
import "../CSS/About.css"
import { Button } from "@mui/material";
const About=()=>{
    return(     
            
            
        <div className='About'>
            <div className="Test">
                <div className="tester">
                    <h2><span>ABOUT-US</span> </h2>
                    <p>Your restaurant’s About Us page should sound like you. 
                       If you run a fun, laid back place, keep that tone consistent in your writing.
                       That means contractions, short sentences, maybe a joke or two.
                       But if your restaurant is ultra-conservative with starched aprons and a dress code, you’ll want to sound more professional.
                       It’s okay to talk about the quality of your offerings and your dedication to excellence. Just avoid the buzzwords!</p>
                <div>
                    <Button variant="contained" color="secondary">Learn more</Button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default About;