import React from 'react';
import logo from '../logo.png';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </nav>
      </header>
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Email: info@bakerzbite.com</p>
        <p>Address: 123 Bakery Street, Sweet City</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Bakerz Bite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
