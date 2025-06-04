import React, { useState } from 'react';
import './FortunePage.css'; // Optional CSS
import closedCookie from '../assets/closed.png';
import openCookie from '../assets/open.gif';

function FortunePage() {
  const [isOpened, setIsOpened] = useState(false);
  const [fortune, setFortune] = useState('');

  const handleCookieClick = async () => {
    if (isOpened) return;
    setIsOpened(true);

    const res = await fetch('http://192.168.3.5:5000/api/fortune');
    const data = await res.json();
    setTimeout(() => {
      setFortune(data.fortune);
    }, 2000); // Delay to match animation duration
  };

  return (
    <div className="fortune-container">
      <img
        src={isOpened ? openCookie : closedCookie}
        alt="Fortune Cookie"
        className="fortune-image"
        onClick={handleCookieClick}
      />
      {fortune && <p className="fortune-text">{fortune}</p>}
    </div>
  );
}

export default FortunePage;
