import "./item-list.scss";
import { Item } from "./item/item";
import { useReducer, useEffect } from "react";
import { swap, mapToVisualData } from "../functions/util";

function reducer(state, action) {
  switch (action.type) {
    case "swap":
      return { ...state, items: swap(state.items, state.swapIndex) };
    case "changeSwapIndex":
      return { ...state, swapIndex: action.swapIndex };
    default:
      return state;
  }
}

export function ItemList({ items, swapIndex, action }) {
  const [wrappedElements, dispatch] = useReducer(
    reducer,
    mapToVisualData(items)
  );
  useEffect(() => {
    dispatch(action);
  }, [action, swapIndex]);

  return (
    <div className="item-list group">
      {wrappedElements.items.map((item, i) => (
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
