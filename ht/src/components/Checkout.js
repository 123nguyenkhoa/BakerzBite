import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { calculateTotal } from '../scripts';
import logo from '../logo.png';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    clearCart();
  };

  return (
    <div className="checkout-page">
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
      <div className="checkout-content">
        <h1>Checkout</h1>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          <h2>Total: ${totalAmount.toFixed(2)}</h2>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Bakerz Bite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Checkout;
