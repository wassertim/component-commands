import "./item-list.scss";
import { Item } from "./item/item";
import { useReducer, useEffect } from "react";
import { swap, mapToVisualData } from "../functions/util";
import { Action } from "../types/action";
import { VisualData } from "../types/visual-data";

const stateHistory: VisualData[] = [];

function newState(s: VisualData) {
  stateHistory.push(s);
  return s;
}

function getPrevState(s: VisualData) {
  const currentIndex = stateHistory.indexOf(s);
  const prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    return s;
  }

  return stateHistory[prevIndex];
}

function getNextState(s: VisualData) {
  const currentIndex = stateHistory.indexOf(s);
  const nextIndex = currentIndex + 1;
  if (nextIndex >= stateHistory.length) {
    return s;
  }

  return stateHistory[nextIndex];
}

function reducer(state: VisualData, action: Action): VisualData {
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

export function ItemList({ items, action }: any) {
  const [wrappedElements, dispatch] = useReducer(
    reducer,
    mapToVisualData(items)
  );
  useEffect(() => {
    dispatch(action);
  }, [action]);

  return (
    <div className="item-list group">
      {wrappedElements.items.map((item: any, i: number) => (
        <Item
          key={i}
          item={item}
          highlighted={[
            wrappedElements.swapIndex,
            wrappedElements.swapIndex + 1,
          ].includes(item.currentPosition)}
          height={item.height}
        />
      ))}
    </div>
  );
}
