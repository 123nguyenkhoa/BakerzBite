import React from 'react';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Product from './components/Product';
import Homepage from './components/Home';

function App() {
  return (
    <div className="App">
      <section>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='Product' element={<Product/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
