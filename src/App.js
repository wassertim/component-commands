import { ItemList } from "./item-list/item-list";
import { useReducer, useState } from "react";
import { commandReducer } from "./reducers/visual.reducer";

function App() {
  const [state, dispatchCommand] = useReducer(commandReducer, {
    listToSort: [1, 12, 5, 3, 11, 7]    
  });
  const [swapIndex, setSwapIndex] = useState(0);

  return (
    <div className="App">
      <ItemList items={state.listToSort} order={state.order} />
      <button onClick={() => dispatchCommand({ type: "swap", swapIndex })}>
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
