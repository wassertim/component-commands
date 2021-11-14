import "./item.css";
import React from "react";

export const Item = React.forwardRef(({ height, item }, ref) => {
  const width = 20;
  const margin = 1;
  const style = {
    height: `${height}%`,
    width: `${width}px`,
    margin: `${margin}px`,
    transform: `translate(${(item.currentPosition - item.originalPosition) * (width + margin*2)}px)`,
  };
  return (
    <div ref={ref} className="item-list__item box" style={style}>
      {item.value}
    </div>
  );
});
