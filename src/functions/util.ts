import { VisualData, VisualDataItem } from "../types/visual-data";

const findCurrentPositionIndex = (index: number, items: any[]) =>
  items.find((i) => i.currentPosition === index).originalPosition;

export function convertToHeights(items: any[]) {
  const max = items.reduce((a, i) => (a > i ? a : i), Number.MIN_SAFE_INTEGER);

  return items.map((i) => (i / max) * 100);
}

export const swap = (items: VisualDataItem[], index: number) => {  
  if (index + 1 >= items.length) {
    return items;
  }
  const [i, j] = [
    findCurrentPositionIndex(index, items),
    findCurrentPositionIndex(index + 1, items),
  ];
  items[i] = { ...items[i], currentPosition: items[i].currentPosition + 1 };
  items[j] = { ...items[j], currentPosition: items[j].currentPosition - 1 };

  return items;
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
