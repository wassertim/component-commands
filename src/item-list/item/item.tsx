import "./item.css";

export const Item = function ({ height, item, highlighted }: any) {
  const width = 30;
  const margin = 1;
  const style: Record<string, string> = {
    "height": `${height}%`,
    "width": `${width}px`,
    "marginLeft": `${margin}px`,
    "marginRight": `${margin}px`,
    "transition": "transform 200ms ease-in-out",
    "transform": `translate(${(item.currentPosition - item.originalPosition) * (width + margin * 2)}px)`,
  };
  if (highlighted) {
    style["backgroundColor"] = "red";
  }
  return (
    <div className="item-list__item box" style={style}>
      {item.value}
    </div>
  );
};
