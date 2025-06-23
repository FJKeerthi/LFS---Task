import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../components/Headers.css'

const Headers = () => {
    return (
        <Navbar
            expand="lg"
            className="floating-navbar"
            style={{ height: "80px" }}
        >
            <Container className="navbar-container">
                {/* Navbar ---logo name */}
                <Navbar.Brand href="/">
                    <div className="logo-text">
                        
                        <span className="logo-main">
                            <span className="logo-gradient">Weather</span>
                            <span className="logo-gradient"> App</span>
                        </span>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="luxury-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    {/* Navbar ---links */}
                    <Nav className="ms-auto">
                        <NavLink 
                            to="/home" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'active-link' : ''}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'active-link' : ''}`
                            }
                        >
                            Find weather
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'active-link' : ''}`
                            }
                        >
                            About Us
                        </NavLink>                        <NavLink 
                            to="/contactus" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'active-link' : ''}`
                            }
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            to="/profile" 
                            className="loginicon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </NavLink>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Headers;