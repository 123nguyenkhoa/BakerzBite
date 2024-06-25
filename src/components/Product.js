import React from 'react';
import '../css/Home.css';
import logo from '../assets/images/Logo.png';


function Product() {
  return (
    <div className="App">
      <header className="App-header">
      <div>♡ Sweet Melodies in Every Bite! ♡</div>
      </header>
      <nav className="navbar">
      <img src={logo} alt="BonBon Logo" className="logo" />
        <a href="/">Homepage</a>
        <a href="#">Product</a>
        <a href="#">Title1</a>
        <a href="#">Title1</a>
        <a href="#">Title1</a>
        <a href="#">Title1</a>
        <a href="#">Title1</a>
      </nav>
      <section className="hero">
        <div className="hero-content">
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

export default Product;
