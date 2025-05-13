import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar(){
return(
    <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/interest">Interest</Link>
        <Link to="/projectform">Projectform</Link>
    </nav>
    )    
}

export default NavBar