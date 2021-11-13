import './item-list.scss';
import {convertToHeights} from '../functions/convert';
import { Item } from './item/item';

export function ItemList({items}) {
    const heights = convertToHeights(items);
    console.log('heights', heights);

    return (
        <div className="item-list">
            {heights.map(height => 
                <Item height={height} />
            )}
        </div>
    );
}