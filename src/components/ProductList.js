import React, { useState, useEffect, useContext } from 'react';
import { useCart } from '../contexts/CartContext'; 
import '../css/ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/path/to/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
