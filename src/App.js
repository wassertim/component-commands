import { ItemList } from "./item-list/item-list";
import { useState } from "react";
import { swap } from "./functions/util";

function mapToVisualData(l) {
  return l.map((i, index) => ({
    originalPosition: index,
    value: i,
    currentPosition: index,
  }));
}

function App() {
  const [state, setState] = useState(() => {
    return mapToVisualData([1, 12, 5, 3, 11, 7]);
  });
  const [swapIndex, setSwapIndex] = useState(0);

  return (
    <div className="container">
      <div className="row g-3 mb-3 mt-3">
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            name="swapIndex"
            defaultValue={swapIndex}
            onChange={(e) => setSwapIndex(+e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={() => setState(swap(state, swapIndex))}
          >
            Swap
          </button>
        </div>
      </div>
      <ItemList items={state} swapIndex={swapIndex} />
    </div>
  );
}

export default App;
