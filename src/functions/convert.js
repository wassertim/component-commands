export function convertToHeights(items) {
    const max = items.reduce((a, i) => a > i ? a : i, Number.MIN_SAFE_INTEGER);

    return items.map(i => (i / max) * 100);
}