import React from 'react';
import styles from './ScrollIndicators.module.css';

const DownScrollIndicator = ({ isMenuOpen }) => {
  return (
    <div className={`${styles.scrollContainer} ${isMenuOpen ? styles.hidden : styles.visible}`}>
      <div className={styles.scrollPath}>
        <div className={`${styles.scrollDot} ${styles.moveDown}`} />
      </div>
      <div className={`${styles.directionArrow} ${styles.arrowDown}`} />
    </div>
  );
};

export default DownScrollIndicator;
