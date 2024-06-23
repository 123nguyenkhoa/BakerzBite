import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../product1.jpg';
import product2 from '../product2.jpg';
import product3 from '../product3.jpg';
import logo from '../logo.png';

const products = [
  { id: 1, image: product1, name: 'Chocolate Cake', description: 'Delicious chocolate cake', price: 10 },
  { id: 2, image: product2, name: 'Vanilla Cake', description: 'Tasty vanilla cake', price: 12 },
  { id: 3, image: product3, name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 14 },
];

const Product = () => {
  return (
    <div className="product-page">
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

export default Product;
