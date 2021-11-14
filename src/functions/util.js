const findCurrentPositionIndex = (index, items) => items.find(i => i.currentPosition === index).originalPosition;

export function convertToHeights(items) {
  const max = items.reduce((a, i) => (a > i ? a : i), Number.MIN_SAFE_INTEGER);

  return items.map((i) => (i / max) * 100);
}

export const swap = (state, index) => {
  const copy = [...state];
  if (index + 1 >= copy.length) {
    return copy;
  }  
  const [i, j] = [findCurrentPositionIndex(index, copy), findCurrentPositionIndex(index+1, copy)];
  copy[i].currentPosition++;
  copy[j].currentPosition--;

  return copy;
};

export function mapToVisualData(l) {
  return l.map((i, index) => ({
    originalPosition: index,
    value: i,
    currentPosition: index,
  }));
}
