import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Services from './components/Services';
import About from './components/About';
import SpecialDish from './components/SpecialDish';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Features from './components/Features';
import Event from './components/Event';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSlider />
      <Services />
      <About />
      <SpecialDish />
      <Menu />
      <Testimonials />
      <Reservation />
      <Features />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
