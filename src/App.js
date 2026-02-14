import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import DatePage from './pages/DatePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/date/:dateId" element={<DatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
