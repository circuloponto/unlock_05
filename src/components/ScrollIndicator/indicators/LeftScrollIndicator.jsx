import React from 'react';
import styles from './ScrollIndicators.module.css';

const LeftScrollIndicator = ({ isMenuOpen }) => {
  return (
    <div className={`${styles.scrollContainer} ${isMenuOpen ? styles.hidden : styles.visible}`}>
      <div className={styles.scrollPath}>
        <div className={`${styles.scrollDot} ${styles.moveLeft}`} />
      </div>
      <div className={`${styles.directionArrow} ${styles.arrowLeft}`} />
    </div>
  );
};

export default LeftScrollIndicator;
