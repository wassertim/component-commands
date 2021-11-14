import "./item-list.scss";
import { Item } from "./item/item";

export function ItemList({ items, swapIndex }) {  
  return (
    <div className="item-list group">
      {items.map((item, i) => {
        return <Item key={i} item={item} highlighted={[swapIndex, swapIndex+1].includes(item.currentPosition)} height={item.height} />;
      })}
    </div>
  );
}
