import "./item.css";
import React from "react";

export const Item = React.forwardRef(({ height, digit }, ref) => {
  const style = {
    height: `${height}%`,
  };
  return (
    <div ref={ref} className="item-list__item box" style={style}>
      {digit}
    </div>
  );
});
