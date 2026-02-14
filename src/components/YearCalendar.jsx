import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function YearCalendar() {
  const [currentMonth, setCurrentMonth] = useState(0); // January = 0
  const navigate = useNavigate();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Festival dates mapped to our data
  const festivalDates = {
    'Jan-14': 'harvest-jan',
    'Jan-15': 'harvest-jan',
    'Oct-24': 'light-diwali',
    'Oct-25': 'light-diwali',
    'Mar-14': 'spring-holi',
    'Apr-14': 'newyear-april',
    'Apr-15': 'newyear-april',
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day) => {
    const monthName = months[currentMonth].substring(0, 3);
    const dateKey = `${monthName}-${day}`;
    
    if (festivalDates[dateKey]) {
      // Navigate to the date page
      navigate(`/date/${festivalDates[dateKey]}`);
    }
  };

  const isFestivalDate = (day) => {
    const monthName = months[currentMonth].substring(0, 3);
    const dateKey = `${monthName}-${day}`;
    return festivalDates[dateKey];
  };

  const renderCalendar = () => {
    const year = 2026;
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const firstDay = getFirstDayOfMonth(currentMonth, year);
    
    const days = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Week day headers
    weekDays.forEach(day => {
      days.push(
        <div key={`header-${day}`} style={styles.weekDayHeader}>
          {day}
        </div>
      );
    });

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} style={styles.emptyDay}></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const isFestival = isFestivalDate(day);
      days.push(
        <div
          key={day}
          style={{
            ...styles.day,
            ...(isFestival ? styles.festivalDay : {}),
          }}
          onClick={() => handleDateClick(day)}
          title={isFestival ? 'Click to view festivals' : ''}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % 12);
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <div style={styles.container}>
      <div style={styles.calendarCard}>
        <h3 style={styles.heading}>📅 2026 Festival Calendar</h3>
        <p style={styles.subheading}>Click on highlighted dates to explore festivals</p>

        <div style={styles.monthNav}>
          <button onClick={prevMonth} style={styles.navButton}>
            ◀
          </button>
          <h4 style={styles.monthName}>{months[currentMonth]} 2026</h4>
          <button onClick={nextMonth} style={styles.navButton}>
            ▶
          </button>
        </div>

        <div style={styles.calendarGrid}>
          {renderCalendar()}
        </div>

        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <div style={styles.legendDot}></div>
            <span>Festival Date (Click to explore)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    background: '#FFF8F0',
  },
  calendarCard: {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2em',
    color: '#000080',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subheading: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '30px',
    fontSize: '1em',
  },
  monthNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '0 20px',
  },
  navButton: {
    background: 'linear-gradient(135deg, #FF9933, #C1272D)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2em',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease',
  },
  monthName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.8em',
    color: '#000080',
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    marginBottom: '30px',
  },
  weekDayHeader: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#000080',
    padding: '10px 0',
    fontSize: '0.9em',
  },
  emptyDay: {
    padding: '15px',
  },
  day: {
    padding: '15px',
    textAlign: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: '#F5F5F5',
    fontWeight: '600',
    color: '#333',
  },
  festivalDay: {
    background: 'linear-gradient(135deg, #FF9933, #FFB347)',
    color: 'white',
    fontWeight: '700',
    boxShadow: '0 4px 12px rgba(255, 153, 51, 0.4)',
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    paddingTop: '20px',
    borderTop: '2px solid #F0F0F0',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9em',
    color: '#666',
  },
  legendDot: {
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    background: 'linear-gradient(135deg, #FF9933, #FFB347)',
  },
};

export default YearCalendar;