import React from 'react'
// import ItemCount from '../itemCount/ItemCount'
import Item from '../item/Item';

function ItemList({items}) {
  return (
    <div>
      {items.map((item)=>(
          <Item key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default ItemList;