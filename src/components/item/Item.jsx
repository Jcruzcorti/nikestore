import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

function Item({item}) {

  const urlDetail = `/detail/${item.id}`
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <img src={item.img} alt="" />
        <p>{item.description}</p>
        <p>${item.price}</p>
        <Link to={urlDetail} className="ProductDetail"> <p> See product in detail </p> </Link>
      </div>
      
    </div>
  )
}

export default Item;