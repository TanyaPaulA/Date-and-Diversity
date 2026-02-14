import React from 'react';

function CompareModal({ isOpen, onClose, festivals, connections }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span style={styles.closeButton} onClick={onClose}>
          &times;
        </span>

        <h2 style={styles.heading}>Festival Comparison</h2>

        <div style={styles.similaritySection}>
          <span style={styles.scoreLabel}>Cultural Similarity</span>
          <div style={styles.scoreCircle}>
            <span style={styles.scoreNumber}>{connections.similarityScore}</span>
            <span style={styles.scorePercent}>%</span>
          </div>
        </div>

        <div style={styles.commonTheme}>
          <h3 style={styles.themeHeading}>Common Theme</h3>
          <p style={styles.themeText}>{connections.commonTheme}</p>
          <p style={styles.sharedElements}>
            <strong>Shared Elements:</strong> {connections.sharedElements.join(', ')}
          </p>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Aspect</th>
              {festivals.map((festival) => (
                <th key={festival.id} style={styles.tableHeader}>
                  {festival.name} ({festival.state})
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>
                <strong>Rituals</strong>
              </td>
              {festivals.map((festival) => (
                <td key={festival.id} style={styles.tableCell}>
                  {festival.rituals.join(', ')}
                </td>
              ))}
            </tr>
            <tr>
              <td style={styles.tableCell}>
                <strong>Traditional Foods</strong>
              </td>
              {festivals.map((festival) => (
                <td key={festival.id} style={styles.tableCell}>
                  {festival.food.join(', ')}
                </td>
              ))}
            </tr>
            <tr>
              <td style={styles.tableCell}>
                <strong>Significance</strong>
              </td>
              {festivals.map((festival) => (
                <td key={festival.id} style={styles.tableCell}>
                  {festival.significance}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    overflowY: 'auto',
  },
  modal: {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    maxWidth: '900px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    margin: '20px',
  },
  closeButton: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    fontSize: '2em',
    cursor: 'pointer',
    color: '#999',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    color: '#000080',
    marginBottom: '30px',
    fontSize: '2em',
  },
  similaritySection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  scoreLabel: {
    fontWeight: 700,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.9em',
    display: 'block',
    marginBottom: '15px',
  },
  scoreCircle: {
    background: 'linear-gradient(135deg, #FF9933, #C1272D)',
    color: 'white',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(255, 153, 51, 0.3)',
  },
  scoreNumber: {
    fontSize: '3em',
    fontWeight: 800,
  },
  scorePercent: {
    fontSize: '1.5em',
    marginLeft: '5px',
  },
  commonTheme: {
    background: 'linear-gradient(135deg, rgba(19, 136, 8, 0.1), rgba(255, 153, 51, 0.1))',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '30px',
    borderLeft: '4px solid #138808',
  },
  themeHeading: {
    color: '#000080',
    marginBottom: '10px',
  },
  themeText: {
    color: '#555',
    lineHeight: 1.6,
  },
  sharedElements: {
    marginTop: '10px',
    color: '#555',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    background: '#FFF8F0',
    padding: '15px',
    textAlign: 'left',
    fontWeight: 700,
    color: '#000080',
    borderBottom: '2px solid #FF9933',
  },
  tableCell: {
    padding: '15px',
    borderBottom: '1px solid #eee',
    verticalAlign: 'top',
  },
};

export default CompareModal;