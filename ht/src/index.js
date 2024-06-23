import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CartProvider } from './contexts/CartContext';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
