import React from 'react';
import styles from './ScrollIndicators.module.css';

const RightScrollIndicator = ({ isMenuOpen }) => {
  return (
    <div className={`${styles.scrollContainer} ${isMenuOpen ? styles.hidden : styles.visible}`}>
      <div className={styles.scrollPath}>
        <div className={`${styles.scrollDot} ${styles.moveRight}`} />
      </div>
      <div className={`${styles.directionArrow} ${styles.arrowRight}`} />
    </div>
  );
};

export default RightScrollIndicator;
