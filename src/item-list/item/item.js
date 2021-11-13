import "./item.css";
import React from "react";

export const Item = React.forwardRef(({ height, digit, item }, ref) => {
  const style = {
    height: `${height}%`,
    transform: `translate(${(item.order - item.index) * 22}px)`
  };
  return (
    <div ref={ref} className="item-list__item box" style={style}>
      {digit}
    </div>
  );
});
