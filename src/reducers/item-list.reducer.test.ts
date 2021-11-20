import { mapToVisualData } from "../functions/util";
import { reducer } from "./item-list.reducer";

describe("Item List Reducer", () => {
    test("should have items", () => {
        const items = [12, 5, 1];
        const visualData = mapToVisualData(items);
        
        const state = reducer(visualData, {type:"swap", swapIndex: 0});
        expect(visualData).not.toBe(state);        
    });
});