import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-bar-content">
                <div className="navbar-inner">
                    {/* Logo */}
                    <Link to="/">
                        <h1 className="logo-text">. aurion</h1>
                    </Link>

                    {/* Nav Links */}
                    <nav className="nav-links">
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/service" className="nav-link">Services</Link>
                        <Link to="/carrer" className="nav-link">Careers</Link>
                        <Link to="/insight" className="nav-link">Insights</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </nav>

                    {/* CTA buttons */}
                    <div className="cta-group">
                        <Link to="/login" className="client-login">Client login</Link>
                        <button className="talk-btn">Let's talk</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar