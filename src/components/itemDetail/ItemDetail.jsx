import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import './itemdetail.css'

function ItemDetail({item}) {

  return (
    <div>       
        <h3>{item.name}</h3>
        <img src={item.img} alt="" />
        <p>{item.description}</p>
        <p>${item.price}</p>

        <ItemCount  stock={5} initial={1}/>
    </div>
  )
}

export default ItemDetail;