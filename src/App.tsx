import { ItemList } from "./item-list/item-list";
import { useState } from "react";
import { run } from "./runners/dumb-runner";

let runState = {
  isOnPause: false,
};

async function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);    
  });
}

async function wait() {
  while (runState.isOnPause) {
    await delay(10);
  }

  return Promise.resolve();
} 

function App() {   
  const elements = [1, 12, 5, 3, 11, 7, 8, 4, 15];
  const [action, setAction] = useState({});
  async function runGenerator(elements: any[], setAction: any) {
    const steps = run(elements, setAction);
        
    for (let step of steps) {
      await wait();
      setAction(step);
      await delay(300);
    }
  }

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
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={async () => await runGenerator(elements, setAction)}
          >
            Run
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={async () => runState.isOnPause = !runState.isOnPause}
          >
            Pause/Continue
          </button>
        </div>
      </div>
      <ItemList items={elements} action={action} />
    </div>
  );
}

export default App;
