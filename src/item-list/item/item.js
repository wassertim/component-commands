import "./item.css";
import React from "react";

export const Item = React.forwardRef(({ height, item }, ref) => {
  const style = {
    height: `${height}%`,
    transform: `translate(${(item.currentPosition - item.originalPosition) * 22}px)`
  };
  return (
    <div ref={ref} className="item-list__item box" style={style}>
      {item.value}
    </div>
  );
});
