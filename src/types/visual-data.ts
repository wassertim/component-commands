export interface VisualData {
    swapIndex: number;
    items: VisualDataItem[];
}

export interface VisualDataItem {
    originalPosition: number;
    value: number;
    currentPosition: number;
    height: number;
}