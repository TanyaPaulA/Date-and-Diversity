import React from 'react';
import Header from '../components/Header';
import DateSelector from '../components/DateSelector';
import YearCalendar from '../components/YearCalendar';

function HomePage() {
  return (
    <div>
      <Header festivalsViewed={[]} />
      <YearCalendar />
      <DateSelector />
    </div>
  );
}

export default HomePage;