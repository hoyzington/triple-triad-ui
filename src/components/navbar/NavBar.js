import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-link" to="/multiplayer">Multiplayer</NavLink>
            <NavLink className="nav-link" to="/collection">Collection</NavLink>
        </nav>
    );
}

/* 
home
login/register
multiplayer - launch game
collection
    build deck
    buy pack
*/

export default NavBar;
