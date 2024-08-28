import React, { useState } from 'react'
import './Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <h1>COMPANY</h1>
                </a>
                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="navbar-item"><a href="/">Home</a></li>
                    <li className="navbar-item"><a href="/about">About</a></li>
                    <li className="navbar-item"><a href="/services">Services</a></li>
                    <li className="navbar-item"><a href="/contact">Contact</a></li>
                </ul>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    )
}
