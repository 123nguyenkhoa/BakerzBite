import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 
import '../css/Cart.css';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleCheckout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    alert(`Payment successful! Total amount: $${totalAmount}`);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <h3>{item.name} (x{item.quantity})</h3>
            <p>Total: ${item.price * item.quantity}</p>
            <button className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <p className="cart-total">
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      )}
    </div>
  );
}

export default Cart;
