import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

function Item({item}) {

  const urlDetail = `/detail/${item.id}`
  return (
    <div className="DivItem">
      <div className="DivSecondItem">
        <Link to={urlDetail} className="PDetailItem"> 
          <h3 className="H3Item">{item.name}</h3>
          <img src={item.img} alt=""  className="ImgItem"/>
          <p className="DescritpionItem">{item.description}</p>
          <p className="PriceItem">${item.price.toFixed(2)}</p>
        </Link>
      </div>

    </div>
  )
}

export default Item;