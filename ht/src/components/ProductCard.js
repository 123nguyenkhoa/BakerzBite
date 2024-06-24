import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ image, name, description, price, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id, image, name, description, price };
    addToCart(product);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <Link to={`/product/${id}`} className="view-details">View Details</Link>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
