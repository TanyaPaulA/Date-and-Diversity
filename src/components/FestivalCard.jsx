import React, { useState } from 'react';

function FestivalCard({ festival, isSelected, onSelect, onView }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      onView(festival.id);
    }
  };

  return (
    <div style={styles.card}>
      <div style={{ ...styles.header, background: festival.color }}>
        <div>
          <h3 style={styles.festivalName}>{festival.name}</h3>
          <p style={styles.state}>{festival.state}</p>
        </div>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(festival.id, e.target.checked)}
          style={styles.checkbox}
        />
      </div>

      <img src={festival.imageUrl} alt={festival.name} style={styles.image} />

      <div style={styles.body}>
        <p style={styles.description}>{festival.description}</p>

        {expanded && (
          <div style={styles.details}>
            <div style={styles.detailSection}>
              <h4 style={styles.detailHeading}>🎭 Rituals</h4>
              <ul style={styles.list}>
                {festival.rituals.map((ritual, index) => (
                  <li key={index} style={styles.listItem}>
                    {ritual}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.detailSection}>
              <h4 style={styles.detailHeading}>🍛 Traditional Foods</h4>
              <ul style={styles.list}>
                {festival.food.map((item, index) => (
                  <li key={index} style={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.detailSection}>
              <h4 style={styles.detailHeading}>✨ Significance</h4>
              <p style={styles.significance}>{festival.significance}</p>
            </div>
          </div>
        )}

        <button onClick={handleExpand} style={styles.expandButton}>
          {expanded ? 'Show Less' : 'Show More Details'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  header: {
    padding: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  festivalName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5em',
    marginBottom: '5px',
  },
  state: {
    fontSize: '0.9em',
    opacity: 0.9,
  },
  checkbox: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  body: {
    padding: '25px',
  },
  description: {
    color: '#555',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  details: {
    marginTop: '20px',
  },
  detailSection: {
    marginBottom: '20px',
  },
  detailHeading: {
    color: '#000080',
    marginBottom: '10px',
    fontSize: '1.1em',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    padding: '8px 0',
    paddingLeft: '25px',
    position: 'relative',
    color: '#555',
  },
  significance: {
    color: '#555',
    lineHeight: 1.6,
  },
  expandButton: {
    background: '#FFF8F0',
    border: '2px solid #FF9933',
    color: '#FF9933',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    marginTop: '15px',
    transition: 'all 0.2s ease',
  },
};

export default FestivalCard;