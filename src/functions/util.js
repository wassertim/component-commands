export function convertToHeights(items) {
  const max = items.reduce((a, i) => (a > i ? a : i), Number.MIN_SAFE_INTEGER);

  return items.map((i) => (i / max) * 100);
}

export const swap = (state, index) => {
  const copy = [...state];
  if (index + 1 >= copy.length) {
    return copy;
  }
  // [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
  const [i, j] = [copy[index].order, copy[index + 1].order];
  copy[i].order++;
  copy[j].order--;

  return copy;
};
