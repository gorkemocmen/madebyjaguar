import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FortunePage from './components/FortunePage';
import MeditationPage from './components/MeditationPage';
import MotivationPage from './components/MotivationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fortune" element={<FortunePage />} />
        <Route path="/motivation" element={<MotivationPage />} />
        <Route path="/meditation" element={<MeditationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
