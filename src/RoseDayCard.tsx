import React, { useState } from 'react';
import CatImage from './assets/image.png';

const RoseDayCard = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const showYesMessage = () => {
    setIsAccepted(true);
  };

  const noClick = () => {
    alert("Oh no! Try again later 🌹");
    window.location.reload(); 
  };

  // Inline styles object to keep the pink aesthetic
  const styles = {
    body: {
      backgroundColor: '#ffe6f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      textAlign: 'center',
      color: '#d6006c',
      width:'100vw'
    },
    container: {
      background: '#fff0f5',
      padding: '50px 70px',
      borderRadius: '25px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
    },
    button: {
      padding: '12px 25px',
      margin: '20px 15px 0 15px',
      fontSize: '1.2rem',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {isAccepted ? (
          <>
            <h1>🌹 Yay! 🌹</h1>
            <p>Thank you, <strong>Muggulu</strong>! 💖</p>
            <img width={200} src={CatImage}/>
            <p>Wishing you endless love and happiness this Valantines Day! 🌹🌹🌹</p>
          </>
        ) : (
          <>
            <h1>🌹 Happy Valantines Day! 🌹</h1>
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
              style={{ ...styles.button, backgroundColor: '#ccc', color: '#333' }}
              onClick={noClick}
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