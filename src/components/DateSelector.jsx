import React from 'react';
import { useNavigate } from 'react-router-dom';

function DateSelector() {
  const navigate = useNavigate();

  const dates = [
    { id: 'harvest-jan', emoji: '🌾', name: 'Mid-January', theme: 'Harvest' },
    { id: 'light-diwali', emoji: '🪔', name: 'Oct/Nov', theme: 'Light' },
    { id: 'spring-holi', emoji: '🎨', name: 'March', theme: 'Spring' },
    { id: 'newyear-april', emoji: '🎊', name: 'April', theme: 'New Year' },
  ];

  const handleDateClick = (dateId) => {
    navigate(`/date/${dateId}`);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Explore India's Cultural Diversity</h2>
        <p style={styles.subheading}>
          Select a date to see how different states celebrate the same moment in time.
        </p>
        <div style={styles.buttonContainer}>
          {dates.map((date) => (
            <button
              key={date.id}
              style={styles.button}
              onClick={() => handleDateClick(date.id)}
            >
              <span style={styles.emoji}>{date.emoji}</span>
              <span style={styles.name}>{date.name}</span>
              <span style={styles.theme}>{date.theme}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '50px 20px',
    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    color: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5em',
    textAlign: 'center',
    marginBottom: '15px',
  },
  subheading: {
    textAlign: 'center',
    fontSize: '1.2em',
    opacity: 0.9,
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    background: 'white',
    border: '3px solid transparent',
    padding: '25px 30px',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    minWidth: '150px',
  },
  emoji: {
    fontSize: '2.5em',
  },
  name: {
    fontWeight: 700,
    fontSize: '1.1em',
    color: '#000080',
  },
  theme: {
    fontSize: '0.9em',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

export default DateSelector;