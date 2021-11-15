const findCurrentPositionIndex = (index: number, items: any[]) =>
  items.find((i) => i.currentPosition === index).originalPosition;

export function convertToHeights(items: any[]) {
  const max = items.reduce((a, i) => (a > i ? a : i), Number.MIN_SAFE_INTEGER);

  return items.map((i) => (i / max) * 100);
}

export const swap = (state: any, index: number) => {
  const copy = [...state];
  if (index + 1 >= copy.length) {
    return copy;
  }
  const [i, j] = [
    findCurrentPositionIndex(index, copy),
    findCurrentPositionIndex(index + 1, copy),
  ];
  copy[i].currentPosition++;
  copy[j].currentPosition--;

  return copy;
};

export function mapToVisualData(l: any[]) {
  const max = l.reduce((a, i) => {
    return a > i ? a : i;
  }, Number.MIN_SAFE_INTEGER);

  return {
    swapIndex: 0,
    items: l.map((i, index) => ({
      originalPosition: index,
      value: i,
      currentPosition: index,
      height: (i / max) * 100,
    })),
  };
}
