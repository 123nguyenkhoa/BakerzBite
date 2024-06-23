import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from './ProductCard';
import logo from '../logo.png';
import carousel1 from '../carousel1.jpg';
import carousel2 from '../carousel2.jpg';
import carousel3 from '../carousel3.jpg';
import product1 from '../product1.jpg';
import product2 from '../product2.jpg';
import product3 from '../product3.jpg';

const products = [
  { id: 1, image: product1, name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 10 },
  { id: 2, image: product2, name: 'Vanilla Cake', description: 'Tasty vanilla cake', price: 12 },
  { id: 3, image: product3, name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 14 },
];

const Home = () => {
  return (
    <div className="home">
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
      <div className="banner">
        <img src={logo} alt="Banner" />
      </div>
      <div className="carousel">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={carousel1} alt="Carousel 1" />
            <p className="legend">Chocolate Cake</p>
          </div>
          <div>
            <img src={carousel2} alt="Carousel 2" />
            <p className="legend">Vanilla Cake</p>
          </div>
          <div>
            <img src={carousel3} alt="Carousel 3" />
            <p className="legend">Strawberry Cake</p>
          </div>
        </Carousel>
      </div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            image={product.image} 
            name={product.name} 
            description={product.description} 
            price={product.price} 
            id={product.id}
          />
        ))}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Bakerz Bite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
