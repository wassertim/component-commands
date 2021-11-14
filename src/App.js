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
    <div className="App">
      <ItemList items={state} />
      <button onClick={() => setState(swap(state, swapIndex))}>Swap</button>
      <input
        name="swapIndex"
        defaultValue={swapIndex}
        onChange={(e) => setSwapIndex(+e.target.value)}
      />
    </div>
  );
}

export default App;
