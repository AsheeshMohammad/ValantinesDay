import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import CatImage from './assets/image.png';

const RoseDayCard = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  // Track the position of the No button
  const [noButtonPos, setNoButtonPos] = useState({ top: 'auto', left: 'auto' });

  const showYesMessage = () => {
    setIsAccepted(true);
    
    // Celebratory Confetti Burst
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  // The "Shuffle" logic
  const handleNoHover = () => {
    // Generate random coordinates within 80% of the screen height/width
    const randomTop = Math.floor(Math.random() * 80) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + "%";
    
    setNoButtonPos({
      position: 'absolute',
      top: randomTop,
      left: randomLeft,
      transition: '0.2s ease' // Smooth jumping effect
    });
  };

  const styles = {
    body: {
      backgroundColor: '#ffe6f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      margin: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      color: '#d6006c',
      overflow: 'hidden',
      position: 'relative' // Needed for absolute positioning of the No button
    },
    container: {
      background: '#fff0f5',
      padding: '50px 70px',
      borderRadius: '25px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
      zIndex: 10,
    },
    button: {
      padding: '12px 25px',
      margin: '20px 15px 0 15px',
      fontSize: '1.2rem',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {isAccepted ? (
          <>
            <h1>🌹 Yay! 🌹</h1>
            <p>Thank you, <strong>Muggulu</strong>! 💖</p>
            <img width={200} src={CatImage} alt="Happy Cat" style={{borderRadius: '15px'}} />
            <p>Wishing you endless love and happiness this Valentine's Day! 🌹🌹🌹</p>
          </>
        ) : (
          <>
            <h1>🌹 Happy Valentine's Day! 🌹</h1>
            <p>Dear <strong>Muggulu</strong>,</p>
            <p>Will you be my Valentine? 🌹</p>
            
            <button 
              className="yes-button"
              style={{ ...styles.button, backgroundColor: '#ff4da6', color: 'white' }}
              onClick={showYesMessage}
            >
              Yes
            </button>

            <button 
              className="no-button"
              onMouseEnter={handleNoHover} // Triggers when mouse touches the button
              style={{ 
                ...styles.button, 
                backgroundColor: '#ccc', 
                color: '#333',
                ...noButtonPos // Applies the new random position
              }}
            >
              No
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RoseDayCard;