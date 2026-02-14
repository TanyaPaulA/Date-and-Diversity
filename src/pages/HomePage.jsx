import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DateSelector from '../components/DateSelector';
import YearCalendar from '../components/YearCalendar';

function HomePage() {
  const [festivalsViewed, setFestivalsViewed] = useState([]);

  // Load viewed festivals from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('festivalsViewed');
    if (saved) {
      setFestivalsViewed(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <Header festivalsViewed={festivalsViewed} />
      <YearCalendar />
      <DateSelector />
    </div>
  );
}

export default HomePage;
