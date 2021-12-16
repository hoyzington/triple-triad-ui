import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
// import Home from './components/Home/Home';

function NavBar() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand href="#home">Bootstrap Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                        <Routes>
                            {/* <Route  path="/" element={<Home />} /> */}
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
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
