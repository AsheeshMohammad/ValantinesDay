import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import CatImage from './assets/image.png';

const RoseDayCard = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ position: 'static' });
  const [noClickCount, setNoClickCount] = useState(0);

  const noMessages = [
    "No",
    "Please don't click me 😢",
    "Are you sure? 💔",
    "Muggulu, stop! 🛑",
    "You're breaking my heart... 😭",
    "Just click Yes already! ✨",
    "I'm getting tired... 🏃‍♂️",
    "Okay, this is getting awkward 😅"
  ];

  const showYesMessage = () => {
    setIsAccepted(true);
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      
      confetti({
        particleCount: 40,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleEscape = (e) => {
    // 1. Prevent any default behavior
    e.preventDefault();

    // 2. Increase the count first
    setNoClickCount((prev) => {
      const nextCount = prev + 1;
      console.log("Current No Count:", nextCount); // Debugging line
      return nextCount < noMessages.length ? nextCount : prev;
    });

    // 3. Move the button immediately
    const randomTop = Math.floor(Math.random() * 80 + 10) + "%";
    const randomLeft = Math.floor(Math.random() * 80 + 10) + "%";
    
    setNoButtonPos({
      position: 'fixed',
      top: randomTop,
      left: randomLeft,
      transition: '0.1s ease-out',
      zIndex: 9999
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
    },
    container: {
      background: '#fff0f5',
      padding: '50px 70px',
      borderRadius: '25px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
      zIndex: 10,
      minWidth: '350px',
    },
    button: {
      padding: '12px 25px',
      margin: '20px 10px 0 10px',
      fontSize: '1.2rem',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {isAccepted ? (
          <div>
            <h1>🌹 Yay! 🌹</h1>
            <p>Thank you, <strong>Muggulu</strong>! 💖</p>
            <img 
              width={200} 
              src={CatImage} 
              alt="Happy Cat" 
              style={{ borderRadius: '15px', margin: '20px 0' }} 
            />
            <p>Wishing you endless love and happiness this Valentine's Day! 🌹🌹🌹</p>
          </div>
        ) : (
          <div>
            <h1>🌹 Happy Valentine's Day! 🌹</h1>
            <p>Dear <strong>Muggulu</strong>,</p>
            <p>Will you be my Valentine? 🌹</p>
            
            <div style={{ marginTop: '30px', position: 'relative' }}>
              <button 
                className="yes-button"
                style={{ 
                  ...styles.button, 
                  backgroundColor: '#ff4da6', 
                  color: 'white',
                  // Visual proof that count is increasing:
                  transform: `scale(${1 + noClickCount * 0.2})`, 
                  transition: '0.3s ease'
                }}
                onClick={showYesMessage}
              >
                Yes
              </button>

              <button 
                className="no-button"
                onMouseEnter={handleEscape}
                onClick={handleEscape}
                style={{ 
                  ...styles.button, 
                  backgroundColor: '#e0e0e0', 
                  color: '#555',
                  ...noButtonPos 
                }}
              >
                {/* Ensures the message matches the current index */}
                {noMessages[noClickCount] || noMessages[noMessages.length - 1]}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoseDayCard;