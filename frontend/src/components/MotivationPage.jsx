import React, { useState } from 'react';
import './MotivationPage.css'; // Optional CSS
import closedCookie from '../assets/closed.png';
import openCookie from '../assets/open.gif';

function MotivationPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [motivation, setMotivation] = useState('');

  const handleCookieClick = async () => {
    if (isOpened) return;
    setIsOpened(true);

    const res = await fetch('http://192.168.3.5:5000/api/motivation');
    const data = await res.json();
    setTimeout(() => {setMotivation(data.motivation);}, 2000); // Delay to match animation duration
  };

  return (
    <div className="motivation-container">
      <img
        src={isOpened ? openCookie : closedCookie}
        alt="Motivation Cookie"
        className="motivation-image"
        onClick={handleCookieClick}
      />
      {motivation && <p className="motivation-text">{motivation}</p>}
    </div>
  );
}

export default MotivationPage;
