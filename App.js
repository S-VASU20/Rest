import React from "react";
import Navbar from "./Components/Navbar";
import { Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import  Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const App=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservation" element={<Reservation/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                
                
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;