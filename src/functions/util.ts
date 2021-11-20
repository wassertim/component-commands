import { VisualData } from "../types/visual-data";

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
  copy[i] = { ...copy[i], currentPosition: copy[i].currentPosition + 1 };
  copy[j] = { ...copy[j], currentPosition: copy[j].currentPosition - 1 };

  return copy;
};

function findMaximum(l: any[]) {
  return l.reduce((a, i) => {
    return a > i ? a : i;
  }, Number.MIN_SAFE_INTEGER);
}

export function mapToVisualData(l: any[]): VisualData {
  const max = findMaximum(l);

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
