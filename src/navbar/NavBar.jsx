import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <div className="navbar">
            <div className="nav-bar-content">
                <div className="navbar-inner">

                    {/* Logo */}
                    <Link to="/" onClick={closeMenu}>
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
                        <Link
                            to="/"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            About
                        </Link>

                        <Link
                            to="/service"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Services
                        </Link>

                        <Link
                            to="/carrer"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Careers
                        </Link>

                        <Link
                            to="/insight"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Insights
                        </Link>

                        <Link
                            to="/contact"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>

                        {/* Mobile Buttons */}
                        <div className="cta-group mobile-btn">

                            <Link
                                to="/login"
                                className="client-login"
                                onClick={closeMenu}
                            >
                                Client Login
                            </Link>

                            <button className="talk-btn">
                                Let's Talk
                            </button>

                        </div>

                    </nav>

                    {/* Desktop Buttons */}
                    <div className="cta-group desktop-btn">

                        <Link
                            to="/login"
                            className="client-login"
                        >
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