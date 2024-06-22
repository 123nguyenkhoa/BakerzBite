import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
    const cakes = [
        { name: 'Chocolate Cake', description: 'Delicious chocolate cake' },
        { name: 'Vanilla Cake', description: 'Classic vanilla cake' },
    ];

    const pastries = [
        { name: 'Croissant', description: 'Flaky and buttery croissant' },
        { name: 'Danish', description: 'Sweet Danish pastry' },
    ];

    const cookies = [
        { name: 'Chocolate Chip Cookie', description: 'Crunchy chocolate chip cookie' },
        { name: 'Oatmeal Cookie', description: 'Healthy oatmeal cookie' },
    ];

    const merchandise = [
        { name: 'Mug', description: 'Branded Bakerz Bite mug' },
        { name: 'Bag', description: 'Branded Bakerz Bite bag' },
    ];

    const galleryImages = [
        'image1.jpg', // Cần thêm hình ảnh vào thư mục src/assets
        'image2.jpg',
        'image3.jpg',
    ];

    return (
        <div className="App">
            <Header />
            <Banner />
            <Navbar />
            <Section id="cakes" title="Cakes" items={cakes} />
            <Section id="pastries" title="Pastries" items={pastries} />
            <Section id="cookies" title="Cookies" items={cookies} />
            <Section id="merchandise" title="Merchandise" items={merchandise} />
            <Gallery images={galleryImages} />
            <Footer />
            <div id="date-time"></div> {/* Thêm phần tử date-time */}
        </div>
    );
}

export default App;
