// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/images/logo.jpg" alt="Bakerz Bite Home" />
                        </Link>
                        <address>Bakerz Bite bakery, 8 Dorothy Lane, East Brunswick, New Jersey, 08816.</address>
                        <a href="mailto:bakerzbite@example.com" className="contact-link">bakerzbite@example.com</a>
                        <a href="tel:+11234567890" className="contact-link">+1 123 456 7890</a>
                    </div>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">Home</Link></li>
                        <li><Link to="/menu" className="footer-link">Menus</Link></li>
                        <li><Link to="/about" className="footer-link">About Us</Link></li>
                        <li><Link to="/contact" className="footer-link">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <form className="newsletter-form">
                        <label htmlFor="email">Subscribe to our newsletter:</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                    <p>&copy; 2023 Bakerz Bite. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
