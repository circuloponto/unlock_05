// Map of possible navigation directions for each slide
// Format: [slideNumber]: { possibleDirections: ['direction1', 'direction2', ...] }
export const slideNavigationMap = {
  1: {
    possibleDirections: ['up'],
  },
  2: {
    possibleDirections: ['down', 'left'],
  },
  3: {
    possibleDirections: ['up', 'right'],
  },
  4: {
    possibleDirections: ['left', 'up'],
  },
  5: {
    possibleDirections: ['right', 'up'],
  },
  6: {
    possibleDirections: ['left', 'down'],
  },
  7: {
    possibleDirections: ['right', 'up'],
  },
  8: {
    possibleDirections: ['left', 'down'],
  },
  9: {
    possibleDirections: ['right', 'up'],
  },
  10: {
    possibleDirections: ['left', 'down'],
  },
  11: {
    possibleDirections: ['right', 'left'],
  },
  12: {
    possibleDirections: ['right', 'up'],
  },
  13: {
    possibleDirections: ['down'],
  },
};

// Helper function to get possible directions based on vertical and horizontal indices
export const getPossibleDirections = ({ verticalIndex, horizontalIndex }) => {
  // Convert from zero-based to one-based index to match the map
  const slideNumber = verticalIndex + 1;
  return slideNavigationMap[slideNumber]?.possibleDirections || [];
};
