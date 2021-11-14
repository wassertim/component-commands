import "./item-list.scss";
import { Item } from "./item/item";
import { useState } from "react";
import { swap, mapToVisualData } from "../functions/util";

export function ItemList({ items, swapIndex }) {
  const [wrappedElements, setWrappedElements] = useState(() =>
    mapToVisualData(items)
  );

  return (
    <div className="item-list group">
      {wrappedElements.map((item, i) => (
        <Item
          key={i}
          item={item}
          highlighted={[swapIndex, swapIndex + 1].includes(
            item.currentPosition
          )}
          height={item.height}
        />
      ))}
    </div>
  );
}
