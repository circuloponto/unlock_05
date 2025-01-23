import React from 'react';
import DirectionalScrollIndicator from './ScrollIndicator/DirectionalScrollIndicator';

const Breadcrumb = ({ slides, currentVerticalIndex, currentHorizontalIndex, setCurrentVerticalIndex, setCurrentHorizontalIndex, isMenuOpen }) => {
  return (
    <nav className={`breadcrumbs-nav ${isMenuOpen ? 'breadcrumbs-nav--hidden' : 'breadcrumbs-nav--visible'}`}>
      {slides.map((row, vIndex) => (
        <div key={vIndex} className="horizontal-breadcrumbs">
          {/* Map through actual slides in the row */}
          {row.map((_, hIndex) => (
            <button
              key={hIndex}
              className={`breadcrumb-button breadcrumb-button--sub ${currentVerticalIndex === vIndex && currentHorizontalIndex === hIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentVerticalIndex(vIndex);
                setCurrentHorizontalIndex(hIndex);
              }}
            />
          ))}
        </div>
      ))}
      <DirectionalScrollIndicator currentSlide={{ verticalIndex: currentVerticalIndex, horizontalIndex: currentHorizontalIndex }} isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Breadcrumb;
