import './item.css';

export function Item({height}) {
    const style = {
        "height": `${height}%`
    }
    return (<div className="item-list__item" style={style}></div>);
}