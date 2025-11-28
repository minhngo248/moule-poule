import { useState, useEffect } from 'react';
import './BirthdayPopup.css';

const BirthdayPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = sessionStorage.getItem('hasSeenBirthdayPopup');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      setTimeout(() => {
        setIsVisible(true);
      }, 200);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenBirthdayPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="birthday-overlay" onClick={handleClose}>
        <div className="birthday-popup" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
          <img 
            src="/poster_birthday.png" 
            alt="Birthday Poster" 
            className="birthday-poster"
          />
        </div>
      </div>
      
      {/* Fireworks */}
      <div className="fireworks-container">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
      </div>
    </>
  );
};

export default BirthdayPopup;
