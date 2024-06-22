import React from 'react';
import './Navbar.css'; // Giả sử bạn đã tạo CSS tương ứng

function Navbar() {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="./assets/logo.jpg" alt="Bakerz Bite - Home" />
        </a>
        <nav className="navbar" data-navbar>
          {/* Navigation items */}
        </nav>
        <div className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          {/* Icon here */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
