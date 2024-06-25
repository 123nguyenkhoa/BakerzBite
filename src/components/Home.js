import React from 'react';
import '../css/Home.css';
import logo from '../assets/images/Logo.png';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import SliderMain from './SliderMain';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>♡ Sweet Melodies in Every Bite! ♡</div>
      </header>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/">
            <img src={logo} alt="BarkersBite" className="logo" />
          </a>
          <a href="/">Birthday Cake</a>
          <a href="Product">Cheese Cake</a>
          <a href="#">CupCake</a>
          <a href="#">Tiramisu Cake</a>
          <a href="#">Donut</a> 
          <a href="#">Muffin</a>
          <a href="#">Tea And Drink</a>
          <a href="#">Flower</a>
        </div>
        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button><FaSearch /></button>
          </div>
          <a href="#"><FaUser /></a>
          <a href="#"><FaShoppingCart /></a>
        </div>
      </nav>
      <section className="hero">
      <div>♡ Sweet Melodies in Every Bite! ♡</div>
        <div className="hero-content">
          <SliderMain/>
          <h1>Join our Cake Club!</h1>
          <p>Get a free cupcake when you collect your online order in store.</p>
          <button>Sign Up Now</button>
        </div>
      </section>
      <section className="categories">
        <h2>What are you looking for?</h2>
        <div className="category-list">
          <div className="category-item">Birthday Zone</div>
          <div className="category-item">Cupcakes</div>
          <div className="category-item">Picture Perfect</div>
          <div className="category-item">Kids Collection</div>
          <div className="category-item">Vegan Carrot Cake</div>
          <div className="category-item">Red Velvet</div>
          <div className="category-item">Cheesecakes</div>
          <div className="category-item">Brownies</div>
          <div className="category-item">Baby Shower</div>
        </div>
      </section>
      <section className="selling-quickly">
        <h2>Selling Quickly...</h2>
        <div className="product-list">
          <div className="product-item">Rainbow Number</div>
          <div className="product-item">Luxury Chocolate Party Platter</div>
          <div className="product-item">Coconut Fruit Combo</div>
          <div className="product-item">Strawberry Flak</div>
          <div className="product-item">Chocolate and Fruit</div>
          <div className="product-item">Classic Fruit Cake and Red Flowers</div>
          <div className="product-item">Chocolate Sprinkles & Strawberry</div>
          <div className="product-item">Classic White & Rainbow Sprinkles</div>
        </div>
      </section>
      <footer>
        <h2>Our Promise</h2>
        <p>The Wonderful World of Cake Box</p>
        <p>
          Each day, over 1000 cake makers descend on Cake Box stores nationwide to make fresh cakes for thousands of people across the UK. Each cake is made fresh in-store with loving care by our expert cake makers and decorators. We know that every single cake has a special meaning for someone and we take immense pride in that. Most of our cakes come with a beautifully hand-piped message of your choice to add a little personal touch. It is our mission to make every celebration a piece of cake.
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
