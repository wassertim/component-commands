import "./item-list.scss";
import { convertToHeights } from "../functions/util";
import { Item } from "./item/item";

export function ItemList({ items, swapIndex }) {
  const heights = convertToHeights(items.map((i) => i.value));

  return (
    <div className="item-list group">
      {heights.map((height, i) => {
        return <Item key={i} item={items[i]} highlighted={[swapIndex, swapIndex+1].includes(items[i].currentPosition)} height={height} />;
      })}
    </div>
  );
}
