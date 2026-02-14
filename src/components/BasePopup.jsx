import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BasePopup.css';

const BasePopup = ({ storageKey, imageSrc, imageAlt, showFireworks = false, delay = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem(storageKey);
    
    if (!hasSeenPopup) {
      setTimeout(() => setIsVisible(true), delay);
    }
  }, [storageKey, delay]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(storageKey, 'true');
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="popup-overlay" onClick={handleClose}>
        <div className="popup-container" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close-button" onClick={handleClose}>×</button>
          <img src={imageSrc} alt={imageAlt} className="popup-image" />
        </div>
      </div>
      
      {showFireworks && (
        <div className="popup-fireworks-container">
          {[...Array(5)].map((_, i) => <div key={i} className="popup-firework"></div>)}
        </div>
      )}
    </>
  );
};

BasePopup.propTypes = {
  storageKey: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  showFireworks: PropTypes.bool,
  delay: PropTypes.number
};

export default BasePopup;
