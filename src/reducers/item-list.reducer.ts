import { Action } from "../types/action";
import { VisualData } from "../types/visual-data";
import { swap } from "../functions/util";

const stateHistory: VisualData[] = [];

function newState(s: VisualData) {  
  stateHistory.push(s); 
  console.log('after new state', stateHistory);
  return s;
}

function getPrevState(s: VisualData) {  
  const currentIndex = stateHistory.indexOf(s);
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return s;
  }
  console.log(stateHistory[prevIndex]);

  return stateHistory[prevIndex];
}

function getNextState(s: VisualData) {
  console.log(s);
  const currentIndex = stateHistory.indexOf(s);
  const nextIndex = currentIndex + 1;
  if (nextIndex >= stateHistory.length) {
    return s;
  }

  return stateHistory[nextIndex];
}

export function reducer(state: VisualData, action: Action): VisualData {
  switch (action.type) {
    case "swap":
      return newState({ ...state, items: swap(state.items, state.swapIndex) });      
    case "changeSwapIndex":      
      return newState({ ...state, swapIndex: action.swapIndex! });
    case "goBack":
      return getPrevState(state);
    case "goForward":
      return getNextState(state);
    default:
      return state;
  }
}