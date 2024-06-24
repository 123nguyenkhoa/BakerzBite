import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import ProductDetail from "./components/ProductDetail";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="product/:id" element={<ProductDetail />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
