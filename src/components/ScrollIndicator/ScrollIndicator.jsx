import React, { useEffect } from 'react';
import { getPossibleDirections } from './slideNavigationMap';
import styles from './ScrollIndicator.module.css';


const ScrollIndicator = ({ currentSlide, isMenuOpen }) => {
  const directions = getPossibleDirections(currentSlide);

  if (!directions.length) return null;

  const renderDots = () => {
    return directions.map((direction, index) => {
      const dotClass = (() => {
        switch(direction) {
          case 'down': return styles.moveUp;
          case 'up': return styles.moveDown;
          case 'left': return styles.moveRight;
          case 'right': return styles.moveLeft;
          default: return '';
        }
      })();

      return <div key={`dot-${direction}-${index}`} className={`${styles.scrollDot} ${dotClass}`} />;
    });
  };

  const renderArrows = () => {
    return directions.map((direction, index) => {
      const arrowClass = (() => {
        switch(direction) {
          case 'up': return styles.arrowUp;
          case 'down': return styles.arrowDown;
          case 'left': return styles.arrowLeft;
          case 'right': return styles.arrowRight;
          default: return '';
        }
      })();

      return (
        <div 
          key={`arrow-${direction}-${index}`} 
          className={`${styles.directionArrow} ${arrowClass}`} 
        />
      );
    });
  };

  return (
    <div className={`${styles.scrollContainer} ${isMenuOpen ? styles.hidden : styles.visible}`}>
      <div className={styles.scrollPath}>
        {renderDots()}
      </div>
      {renderArrows()}
    </div>
  );
};

export default ScrollIndicator;
