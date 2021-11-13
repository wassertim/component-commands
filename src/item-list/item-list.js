import "./item-list.scss";
import { convertToHeights } from "../functions/util";
import { Item } from "./item/item";
import React from "react";

export function ItemList({ items }) {
  const heights = convertToHeights(items.map(i => i.value));
  console.log("items", items);
  const references = {};

  const getOrCreateRef = (id) => {
    if (!references[id]) {
      references[id] = React.createRef();
    }

    return references[id];
  };

  return (
    <>
      <div className="item-list group">
        {heights.map((height, i) => {
          return (
            <Item
              ref={getOrCreateRef(i)}
              digit={items[i].value}
              item={items[i]}
              key={i}
              height={height}
            />
          );
        })}
      </div>
    </>
  );
}
