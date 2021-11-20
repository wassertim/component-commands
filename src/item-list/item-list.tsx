import "./item-list.scss";
import { Item } from "./item/item";
import { useReducer, useEffect } from "react";
import { mapToVisualData } from "../functions/util";
import {reducer} from "../reducers/item-list.reducer";

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
