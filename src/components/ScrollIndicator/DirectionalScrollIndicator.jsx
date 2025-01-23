import React from 'react';
import { UpScrollIndicator, DownScrollIndicator, LeftScrollIndicator, RightScrollIndicator } from './indicators';
import styles from './DirectionalScrollIndicator.module.css';

const DirectionalScrollIndicator = ({ currentSlide, isMenuOpen }) => {
  const getIndicators = () => {
    const position = `${currentSlide.verticalIndex}.${currentSlide.horizontalIndex}`;
    
    // Define available moves for each position (showing which moves are possible)
    const slideDirections = {
      "0.0": ['up'],                 // Can move down to 1.0
      "1.0": ['down', 'left'],          // Can move up to 0.0 or right to 1.1
      "1.1": ['right', 'up'],         // Can move down to 2.0 or left to 1.0
      "2.0": ['down', 'left'],          // Can move up to 1.1 or right to 2.1
      "2.1": ['right', 'up'],         // Can move down to 3.0 or left to 2.0
      "3.0": ['down', 'left'],          // Can move up to 2.1 or right to 3.1
      "3.1": ['right', 'up'],         // Can move down to 4.0 or left to 3.0
      "4.0": ['down', 'left'],          // Can move up to 3.1 or right to 4.1
      "4.1": ['right', 'up'],          // Can move down to 5.0 or left to 4.0
      "5.0": ['down', 'left'],          // Can move up to 4.1 or right to 5.1
      "5.1": ['right', 'left'],        // Can move right to 5.2 or left to 5.0
      "5.2": ['right', 'up'],         // Can move down to 6.0 or left to 5.1
      "6.0": ['up']                    // Can move up to 5.2
    };

    const directions = slideDirections[position] || [];
    
    return directions.map(direction => {
      switch(direction) {
        case 'up':
          return <UpScrollIndicator key="up" isMenuOpen={isMenuOpen} />;
        case 'down':
          return <DownScrollIndicator key="down" isMenuOpen={isMenuOpen} />;
        case 'left':
          return <LeftScrollIndicator key="left" isMenuOpen={isMenuOpen} />;
        case 'right':
          return <RightScrollIndicator key="right" isMenuOpen={isMenuOpen} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className={styles.container}>
      {getIndicators()}
    </div>
  );
};

export default DirectionalScrollIndicator;
