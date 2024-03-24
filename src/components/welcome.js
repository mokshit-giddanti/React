import React, { useState, useEffect } from 'react';

function WelcomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const sentence = "Welcome To Project Management System";
  const wordsArray = sentence.split(' ');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % wordsArray.length);
    }, 1000); // Adjust the delay as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ backgroundImage: `url('/pms.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: 'darkgreen', fontSize: '200%' }}>
        {wordsArray.slice(0, currentWordIndex + 1).join(' ')}
      </h1>
    </div>
  );
}

export default WelcomePage;
