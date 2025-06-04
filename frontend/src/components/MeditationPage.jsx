import React, { useState } from 'react';
import './MeditationPage.css'; // Optional CSS
import closedCookie from '../assets/closed.png';
import openCookie from '../assets/open.gif';

function MeditationPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [meditation, setMeditation] = useState('');

  const handleCookieClick = async () => {
    if (isOpened) return;
    setIsOpened(true);

    const res = await fetch('http://192.168.3.5:5000/api/meditation');
    const data = await res.json();
    setTimeout(() => {
      setMeditation(data.meditation);
    }, 2000); // Delay to match animation duration
  };

  return (
    <div className="meditation-container">
      <img
        src={isOpened ? openCookie : closedCookie}
        alt="Meditation Cookie"
        className="meditation-image"
        onClick={handleCookieClick}
      />
      {meditation && <p className="meditation-text">{meditation}</p>}
    </div>
  );
}

export default MeditationPage;
