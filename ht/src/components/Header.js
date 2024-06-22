// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src="/images/logo.jpg" alt="Bakerz Bite - Home" />
                </Link>
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/menu" className="navbar-link">Menu</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="navbar-link">About Us</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/chefs" className="navbar-link">Our Chefs</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="navbar-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <button className="nav-open-btn" aria-label="open menu">
                    {/* Icon or text for opening menu */}
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>
                <div className="overlay"></div>
            </div>
        </header>
    );
};

export default Header;
