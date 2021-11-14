import "./item.css";
import React from "react";

export const Item = React.forwardRef(({ height, item, highlighted }, ref) => {
  const width = 30;
  const margin = 1;
  const style = {
    height: `${height}%`,
    width: `${width}px`,
    "margin-left": `${margin}px`,
    "margin-right": `${margin}px`,
    transform: `translate(${(item.currentPosition - item.originalPosition) * (width + margin*2)}px)`,
  };
  if (highlighted) {
      style["background-color"] = "red";
  }
  return (
    <div ref={ref} className="item-list__item box" style={style}>
      {item.value}
    </div>
  );
});
