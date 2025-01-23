import React from 'react';
import styles from './ScrollIndicators.module.css';

const UpScrollIndicator = ({ isMenuOpen }) => {
  return (
    <div className={`${styles.scrollContainer} ${isMenuOpen ? styles.hidden : styles.visible}`}>
      <div className={styles.scrollPath}>
        <div className={`${styles.scrollDot} ${styles.moveUp}`} />
      </div>
      <div className={`${styles.directionArrow} ${styles.arrowUp}`} />
    </div>
  );
};

export default UpScrollIndicator;
