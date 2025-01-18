import React, { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './Slider.module.css';

const SliderComponent = forwardRef(({
  slides, 
  currentVerticalIndex, 
  setCurrentVerticalIndex, 
  currentHorizontalIndex, 
  setCurrentHorizontalIndex,
  isMenuOpen,
  isModalOpen
}, ref) => {
  console.log('Slider rendering with:', { currentVerticalIndex, currentHorizontalIndex });
  const [isScrolling, setIsScrolling] = useState(false);
  const [instantTarget, setInstantTarget] = useState(null);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const lastNavigatedPosition = useRef({ vertical: 0, horizontal: 0 });
  const hasNavigatedThisTouch = useRef(false);
  const movementDirection = useRef(null); // 'horizontal' or 'vertical'

  useImperativeHandle(ref, () => ({
    setInstantTarget: (vIndex) => {
      setInstantTarget(vIndex);
    }
  }));

  // Movement map defines where each slide can go
  const movementMap = {
    "0.0": { up: null, down: "1.0", left: null, right: null },  // Slide0 - only down
    "1.0": { up: "0.0", down: null, left: null, right: "1.1" },  // Slide1.0 - up or right
    "1.1": { up: null, down: "2.0", left: "1.0", right: null },  // Slide1.1 - down or left
    "2.0": { up: "1.1", down: null, left: null, right: "2.1" },  // Slide2.0 - up or right
    "2.1": { up: null, down: "3.0", left: "2.0", right: null },  // Slide2.1 - down or left
    "3.0": { up: "2.1", down: null, left: null, right: "3.1" },  // Slide3.0 - up or right
    "3.1": { up: null, down: "4.0", left: "3.0", right: null },  // Slide3.1 - down or left
    "4.0": { up: "3.1", down: null, left: null, right: "4.1" },  // Slide4.0 - up or right
    "4.1": { up: null, down: "5.0", left: "4.0", right: null },  // Slide4.1 - down or left
    "5.0": { up: "4.1", down: null, left: null, right: "5.1" },  // Slide5.0 - up or right
    "5.1": { up: null, down: null, left: "5.0", right: "5.2" },  // Slide5.1 - left or right
    "5.2": { up: null, down: null, left: "5.1", right: null }    // Slide5.2 - left only
  };

  // Map of viewport positions for each slide
  const viewportPositions = {
    "0.0": { x: 100, y: 0 },    // Slide0 starts 100vw to the right
    "1.0": { x: 100, y: 100 },   // First slide of row 1
    "1.1": { x: 200, y: 100 },   // Second slide of row 1
    "2.0": { x: 200, y: 200 },   // First slide of row 2
    "2.1": { x: 300, y: 200 },   // Second slide of row 2
    "3.0": { x: 300, y: 300 },   // First slide of row 3
    "3.1": { x: 400, y: 300 },   // Second slide of row 3
    "4.0": { x: 400, y: 400 },   // First slide of row 4
    "4.1": { x: 500, y: 400 },   // Second slide of row 4
    "5.0": { x: 500, y: 500 },   // First slide of row 5
    "5.1": { x: 600, y: 500 },   // Second slide of row 5
    "5.2": { x: 700, y: 500 }    // Third slide of row 5
  };

  const handleNavigation = useCallback((direction) => {
    if (isScrolling) return;

    const currentPosition = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    const possibleMoves = movementMap[currentPosition];
    
    console.log('Current Position:', currentPosition);
    console.log('Possible Movements:', {
      up: possibleMoves.up,
      down: possibleMoves.down,
      left: possibleMoves.left,
      right: possibleMoves.right
    });
    console.log('Attempting to move:', direction);
    
    const nextPosition = possibleMoves[direction];
    console.log('Next Position:', nextPosition);

    if (nextPosition) {
      const [nextVertical, nextHorizontal] = nextPosition.split('.').map(Number);
      setCurrentVerticalIndex(nextVertical);
      setCurrentHorizontalIndex(nextHorizontal);
      
      // Update viewport position
      const { x, y } = viewportPositions[nextPosition];
      setX(x);
      setY(y);
      
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);
    } else {
      console.log('Movement not possible in direction:', direction);
    }
  }, [currentVerticalIndex, currentHorizontalIndex, isScrolling, movementMap]);

  // Reset navigation tracking on touch start
  const handleTouchStart = useCallback((e) => {
    console.log('Touch Start Event Fired');
    if (isMenuOpen || isModalOpen) {
      console.log('Menu or modal is open, ignoring touch');
      return;
    }
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    hasNavigatedThisTouch.current = false;
    movementDirection.current = null;
    lastNavigatedPosition.current = { vertical: currentVerticalIndex, horizontal: currentHorizontalIndex };
    console.log('Touch Start Position:', { x: touchStartX.current, y: touchStartY.current });
  }, [isMenuOpen, isModalOpen, currentVerticalIndex, currentHorizontalIndex]);

  const handleTouchMove = useCallback((e) => {
    console.log('Touch Move Event Fired');
    if (isMenuOpen || isScrolling || hasNavigatedThisTouch.current || isModalOpen) {
      console.log('Menu open, scrolling, modal open, or already navigated - ignoring touch');
      return;
    }
    
    const touchEndY = e.touches[0].clientY;
    const touchEndX = e.touches[0].clientX;
    
    const yDiff = touchStartY.current - touchEndY;
    const xDiff = touchStartX.current - touchEndX;

    console.log('Touch Differences:', { xDiff, yDiff });

    const threshold = 15;

    // Only handle the dominant movement direction
    if (Math.abs(xDiff) > Math.abs(yDiff) * 2) {  // Horizontal movement is clearly dominant
      if (xDiff > threshold) {
        console.log('Moving right');
        e.preventDefault();
        hasNavigatedThisTouch.current = true;
        handleNavigation('right');
      } else if (xDiff < -threshold) {
        console.log('Moving left');
        e.preventDefault();
        hasNavigatedThisTouch.current = true;
        handleNavigation('left');
      }
    } else if (Math.abs(yDiff) > Math.abs(xDiff) * 2) {  // Vertical movement is clearly dominant
      if (yDiff > threshold) {
        console.log('Moving down');
        e.preventDefault();
        hasNavigatedThisTouch.current = true;
        handleNavigation('down');
      } else if (yDiff < -threshold) {
        console.log('Moving up');
        e.preventDefault();
        hasNavigatedThisTouch.current = true;
        handleNavigation('up');
      }
    }

  }, [handleNavigation, isMenuOpen, isScrolling, isModalOpen]);

  const getViewportPosition = useCallback(() => {
    // For horizontal position: 
    // - Each row is shifted 100vw to the right from the previous row
    // - Each slide within a row is 100vw apart
    const rowOffset = currentVerticalIndex * 100;
    const slideOffset = currentHorizontalIndex * 100;
    const x = rowOffset + slideOffset - (currentVerticalIndex === 0 ? 100 : 0); // Only shift first row

    // For vertical position: each row is 100vh below the previous
    const y = currentVerticalIndex * 100;

    return { x, y };
  }, [currentVerticalIndex, currentHorizontalIndex]);

  const handleMouseWheel = useCallback((e) => {
    e.preventDefault();
    if (isMenuOpen || isScrolling || isModalOpen) return;
    
    const deltaY = e.wheelDelta || -e.deltaY || -e.detail;
    const verticalDelta = Math.max(-1, Math.min(1, deltaY));
    
    // Scrolling down (negative delta)
    if (verticalDelta < 0) {
      handleNavigation('down');
      if (!movementMap[`${currentVerticalIndex}.${currentHorizontalIndex}`]?.down) {
        handleNavigation('right');
      }
    }
    // Scrolling up (positive delta)
    else if (verticalDelta > 0) {
      handleNavigation('up');
      if (!movementMap[`${currentVerticalIndex}.${currentHorizontalIndex}`]?.up) {
        handleNavigation('left');
      }
    }
  }, [handleNavigation, isMenuOpen, isScrolling, isModalOpen, currentVerticalIndex, currentHorizontalIndex, movementMap]);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        handleNavigation('up');
        break;
      case 'ArrowDown':
        e.preventDefault();
        handleNavigation('down');
        break;
      case 'ArrowLeft':
        e.preventDefault();
        handleNavigation('left');
        break;
      case 'ArrowRight':
        e.preventDefault();
        handleNavigation('right');
        break;
    }
  }, [handleNavigation]);

  useEffect(() => {
    if (instantTarget !== null) {
      setCurrentVerticalIndex(instantTarget);
      setCurrentHorizontalIndex(0);
    }
  }, [instantTarget, setCurrentVerticalIndex, setCurrentHorizontalIndex]);

  useEffect(() => {
    if (instantTarget) {
      const timer = setTimeout(() => {
        setInstantTarget(null);
      }, 450); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [instantTarget]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      handleMouseWheel(e);
    };

    // Add touch event listeners at document level
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleKeyDown, handleMouseWheel, handleTouchStart, handleTouchMove]);

  // Update position when indices change
  useEffect(() => {
    const position = `${currentVerticalIndex}.${currentHorizontalIndex}`;
    const viewport = viewportPositions[position];
    if (viewport) {
      setX(viewport.x);
      setY(viewport.y);
    }
  }, [currentVerticalIndex, currentHorizontalIndex]);

  // Initial position from viewport map
  const initialPosition = viewportPositions["0.0"];
  const [x, setX] = useState(initialPosition.x);
  const [y, setY] = useState(initialPosition.y);

  // Calculate vertical offset for each row based on the stair pattern
  const getRowPosition = (rowIndex) => {
    return rowIndex * 100; // Vertical position
  };

  // Calculate horizontal base position for each row
  const getRowHorizontalOffset = (rowIndex) => {
    if (rowIndex === 0) {
      return 100; // Position Slide0 100vw to the right
    }
    return rowIndex * 100; // Each row shifts 100vw to the right
  };

  // Calculate horizontal position for each slide within a row
  const getSlidePosition = (rowIndex, slideIndex) => {
    const rowOffset = getRowHorizontalOffset(rowIndex);
    const slideOffset = slideIndex * 100;
    return rowOffset + slideOffset;
  };

  const viewportStyle = {
    transform: `translate3d(${-x}vw, ${-y}vh, 0)`
  };

  return (
    <div className={styles.container}>
      <div className={styles.viewport} style={viewportStyle}>
        {slides.map((row, vIndex) => (
          <div 
            key={`row-${vIndex}`} 
            style={{ 
              position: 'absolute', 
              top: `${getRowPosition(vIndex)}vh`, 
              left: `${getRowHorizontalOffset(vIndex)}vw`,
              width: vIndex === 4 ? '300vw' : '200vw',  // 300vw only for last row
              height: '100vh'
            }}
          >
            {row.map((slide, hIndex) => (
              <div 
                key={`slide-${vIndex}-${hIndex}`} 
                style={{ 
                  position: 'absolute', 
                  left: `${hIndex * 100}vw`,
                  width: '100vw',
                  height: '100vh'
                }}
              >
                {slide}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

SliderComponent.displayName = 'Slider';

export default SliderComponent;
