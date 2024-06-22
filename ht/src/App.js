// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Đảm bảo rằng file này tồn tại trong thư mục pages

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Các Route khác có thể được thêm vào đây */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
