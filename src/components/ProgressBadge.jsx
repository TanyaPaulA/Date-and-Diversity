import React from 'react';

function ProgressBadge({ festivalsViewed }) {
  const total = 15; // Total festivals across all dates
  const percentage = (festivalsViewed.length / total) * 100;

  return (
    <div style={styles.badge}>
      <span style={styles.badgeText}>Cultural Explorer</span>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${percentage}%` }}></div>
      </div>
      <span style={styles.progressLabel}>
        {festivalsViewed.length}/{total} Festivals Explored
      </span>
    </div>
  );
}

const styles = {
  badge: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '20px 30px',
    borderRadius: '15px',
    display: 'inline-block',
  },
  badgeText: {
    fontWeight: 700,
    fontSize: '1.1em',
    display: 'block',
    marginBottom: '10px',
  },
  progressBar: {
    width: '300px',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '8px',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
    transition: 'width 0.5s ease',
  },
  progressLabel: {
    fontSize: '0.9em',
    opacity: 0.9,
  },
};

export default ProgressBadge;