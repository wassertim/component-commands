import { ItemList } from "./item-list/item-list";
import { useReducer, useState } from "react";
import { commandReducer } from "./reducers/visual.reducer";
import { swap } from "./functions/util";

function mapToVisualData(l) {
  return l.map((i, index) => ({
    index,
    value: i,
    translate: 0,
    order: index
  }));
}

function App() {
  // const [state, dispatchCommand] = useReducer(commandReducer, mapToVisualData([1, 12, 5, 3, 11, 7]));
  const [state, setState] = useState(() => {
    return mapToVisualData([1, 12, 5, 3, 11, 7]);
  });
  const [swapIndex, setSwapIndex] = useState(0);  

  return (
    <div className="App">
      <ItemList items={state} />
      {/* <button onClick={() => dispatchCommand({ type: "swap", swapIndex })}> */}
      <button onClick={() => setState(swap(state, swapIndex))}>
        Swap
      </button>
      <input
        name="swapIndex"
        defaultValue={swapIndex}
        onChange={(e) => setSwapIndex(+e.target.value)}
      />
    </div>
  );
}

export default App;
