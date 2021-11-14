import { ItemList } from "./item-list/item-list";
import { useState } from "react";

function App() {
  const elements = [1, 12, 5, 3, 11, 7, 8, 4, 15];
  const [action, setAction] = useState({});

  return (
    <div className="container">
      <div className="row g-3 mb-3 mt-3">
        <div className="col-auto">
          <input
            min={0}
            max={elements.length - 2}
            type="number"
            className="form-control"
            name="swapIndex"
            defaultValue={0}
            onChange={(e) =>
              setAction({ type: "changeSwapIndex", swapIndex: +e.target.value })
            }
          />
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={() => setAction({ type: "swap" })}
          >
            Swap
          </button>
        </div>
      </div>
      <ItemList items={elements} action={action} />
    </div>
  );
}

export default App;
