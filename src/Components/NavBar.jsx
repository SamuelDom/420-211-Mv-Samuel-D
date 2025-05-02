import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
return(
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/interest">Interest</Link>
        <Link to="/projectform">Projectform</Link>
    </nav>
    )    
}

export default NavBar