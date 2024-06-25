import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Homepage from './components/Home';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext'; // Đảm bảo đường dẫn đúng

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
