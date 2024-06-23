import React from 'react';
import logo from '../logo.png';

const About = () => {
  return (
    <div className="about-page">
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
      <div className="about-content">
        <h1>About Us</h1>
        <h2>Introduction</h2>
        <p>
          The thirst for learning, upgrading technical skills and applying the concepts in real
          life environment at a fast pace is what the industry demands from IT professionals
          today. However busy work schedules, far-flung locations, unavailability of convenient
          time-slots pose as major barriers when it comes to applying the concepts into
          realism. And hence the need to look out for alternative means of implementation in
          the form of laddered approach.
        </p>
        <h2>Objectives</h2>
        <p>
          The Objective of this program is to give a sample project to work on real life
          projects. These applications help you build a larger more robust application.
        </p>
        <h2>Problem Statement</h2>
        <p>
          Since its launch, “Bakerz Bite” has developed into a reputable bakery & café,
          specializing in baked goods, passionately made from the finest ingredients.
        </p>
        <h2>Hardware/ Software Requirements</h2>
        <p>
          Hardware: Intel Core i3/i5 Processor or higher, 8 GB RAM or above, Color SVGA, 500 GB Hard Disk space, Mouse, Keyboard.
          Software: Frontend: HTML5, CSS, Bootstrap, JavaScript, jQuery, React/AngularJS, Figma, XML. Data Store: JSON files or TXT files.
        </p>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Bakerz Bite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
