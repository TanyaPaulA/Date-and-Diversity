import React from 'react';
import ProgressBadge from './ProgressBadge';

function Header({ festivalsViewed }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          <span style={styles.inText}>IN</span> India in a Day
        </h1>
        <p style={styles.tagline}>One Date, Many Indias</p>
        <ProgressBadge festivalsViewed={festivalsViewed} />
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #FF9933 0%, #C1272D 100%)',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3.5em',
    marginBottom: '15px',
    fontWeight: '700',
  },
  inText: {
    color: '#FFFFFF',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  tagline: {
    fontSize: '1.3em',
    opacity: 0.95,
    marginBottom: '30px',
    fontStyle: 'italic',
  },
};

export default Header;