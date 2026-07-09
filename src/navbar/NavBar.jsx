import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="navbar">
            <div className="nav-bar-content">
                <div className="navbar-inner">

                    <Link to="/">
                        <h1 className="logo-text">. aurion</h1>
                    </Link>

                    {/* Hamburger */}
                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation */}
                    <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/service" className="nav-link">Services</Link>
                        <Link to="/carrer" className="nav-link">Careers</Link>
                        <Link to="/insight" className="nav-link">Insights</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>

                        <div className="cta-group mobile-btn">
                            <Link to="/login" className="client-login">
                                Client Login
                            </Link>

                            <button className="talk-btn">
                                Let's Talk
                            </button>
                        </div>
                    </nav>

                    <div className="cta-group desktop-btn">
                        <Link to="/login" className="client-login">
                            Client Login
                        </Link>

                        <button className="talk-btn">
                            Let's Talk
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar