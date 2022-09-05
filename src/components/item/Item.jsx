import React from 'react'
import './item.css'

function Item({item}) {
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <img src={item.img} alt="" />
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      
    </div>
  )
}

export default Item;