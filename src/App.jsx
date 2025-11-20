import { useEffect } from 'react';
import Carousel from './components/Carousel';
import Header from './components/Header';
import CountDay from './components/CountDay';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize WOW.js for animations
    const WOW = window.WOW;
    if (WOW) {
      new WOW({
        animateClass: 'animated',
        offset: 100
      }).init();
    }
  }, []);

  return (
    <div className="App">
      <Carousel />
      <Header />
      <CountDay />
      <AboutUs />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
