import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FestivalCard from '../components/FestivalCard';
import CompareModal from '../components/CompareModal';
import { festivalsData } from '../data/festivalsData';

function DatePage() {
  const { dateId } = useParams();
  const navigate = useNavigate();
  const [selectedFestivals, setSelectedFestivals] = useState([]);
  const [festivalsViewed, setFestivalsViewed] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const currentData = festivalsData[dateId];

  // Load viewed festivals from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('festivalsViewed');
    if (saved) {
      setFestivalsViewed(JSON.parse(saved));
    }
  }, []);

  if (!currentData) {
    return (
      <div style={styles.notFound}>
        <h2>No festivals found for this date</h2>
        <button onClick={() => navigate('/')} style={styles.backButton}>
          ← Back to Calendar
        </button>
      </div>
    );
  }

  const handleFestivalSelect = (festivalId, isChecked) => {
    if (isChecked) {
      if (selectedFestivals.length < 4) {
        setSelectedFestivals([...selectedFestivals, festivalId]);
      } else {
        alert('You can only compare up to 4 festivals at once!');
      }
    } else {
      setSelectedFestivals(selectedFestivals.filter((id) => id !== festivalId));
    }
  };

  const handleFestivalView = (festivalId) => {
    if (!festivalsViewed.includes(festivalId)) {
      const updated = [...festivalsViewed, festivalId];
      setFestivalsViewed(updated);
      // Save to localStorage
      localStorage.setItem('festivalsViewed', JSON.stringify(updated));
    }
  };

  const handleCompare = () => {
    setShowCompareModal(true);
  };

  const getSelectedFestivalObjects = () => {
    return selectedFestivals.map((id) =>
      currentData.festivals.find((f) => f.id === id)
    );
  };

  const total = 15;
  const percentage = (festivalsViewed.length / total) * 100;

  return (
    <div style={styles.page}>
      {/* Header for this page */}
      <header style={styles.header}>
        <div style={styles.container}>
          <button onClick={() => navigate('/')} style={styles.backButton}>
            ← Back to Calendar
          </button>
          <h1 style={styles.title}>India in a Day</h1>
          <p style={styles.tagline}>One Date, Many Indias</p>
          
          {/* Progress Badge */}
          <div style={styles.progressBadge}>
            <span style={styles.badgeText}>Cultural Explorer</span>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${percentage}%` }}></div>
            </div>
            <span style={styles.progressLabel}>
              {festivalsViewed.length}/{total} Festivals Explored
            </span>
          </div>
        </div>
      </header>

      {/* Festival Section */}
      <section style={styles.festivalSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div>
              <h2 style={styles.festivalHeading}>{currentData.theme}</h2>
              <p style={styles.dateText}>{currentData.date}</p>
            </div>
            <button
              style={{
                ...styles.compareBtn,
                ...(selectedFestivals.length < 2 ? styles.compareBtnDisabled : {}),
              }}
              disabled={selectedFestivals.length < 2}
              onClick={handleCompare}
            >
              Compare Selected ({selectedFestivals.length})
            </button>
          </div>

          <div style={styles.festivalGrid}>
            {currentData.festivals.map((festival) => (
              <FestivalCard
                key={festival.id}
                festival={festival}
                isSelected={selectedFestivals.includes(festival.id)}
                onSelect={handleFestivalSelect}
                onView={handleFestivalView}
              />
            ))}
          </div>

          <div style={styles.didYouKnow}>
            <h3 style={styles.didYouKnowHeading}>🧠 Did You Know?</h3>
            <p style={styles.didYouKnowText}>{currentData.connections.didYouKnow}</p>
          </div>
        </div>
      </section>

      <CompareModal
        isOpen={showCompareModal}
        onClose={() => setShowCompareModal(false)}
        festivals={getSelectedFestivalObjects()}
        connections={currentData.connections}
      />
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE8D6 100%)',
  },
  header: {
    background: 'linear-gradient(135deg, #FF9933 0%, #C1272D 100%)',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: '20px',
    top: '20px',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid white',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1em',
    transition: 'all 0.3s ease',
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3em',
    marginBottom: '10px',
    fontWeight: '700',
  },
  tagline: {
    fontSize: '1.2em',
    opacity: 0.95,
    fontStyle: 'italic',
    marginBottom: '30px',
  },
  progressBadge: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    padding: '20px 30px',
    borderRadius: '15px',
    display: 'inline-block',
    marginTop: '20px',
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
  festivalSection: {
    padding: '50px 20px 80px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  festivalHeading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5em',
    color: '#000080',
    marginBottom: '10px',
  },
  dateText: {
    fontSize: '1.2em',
    color: '#666',
  },
  compareBtn: {
    background: 'linear-gradient(135deg, #138808, #0a5c05)',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '10px',
    fontWeight: '700',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  compareBtnDisabled: {
    background: '#ccc',
    cursor: 'not-allowed',
  },
  festivalGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    marginBottom: '40px',
  },
  didYouKnow: {
    background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.1), rgba(19, 136, 8, 0.1))',
    padding: '30px',
    borderRadius: '15px',
    borderLeft: '5px solid #138808',
    marginTop: '40px',
  },
  didYouKnowHeading: {
    fontFamily: "'Playfair Display', serif",
    color: '#000080',
    marginBottom: '15px',
    fontSize: '1.5em',
  },
  didYouKnowText: {
    color: '#555',
    lineHeight: 1.8,
    fontSize: '1.05em',
  },
  notFound: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
};

export default DatePage;
