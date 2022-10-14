import React, { useState,useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './itemdetail.css'
import { CartContext } from '../../context/CartContext';



function ItemDetail({item}) {

  const [addCart, setAddCart] = useState(0)

  const {addItem} =useContext(CartContext);

  const navigation = useNavigate()

  function handleOnAdd(quantity) {
    setAddCart(quantity);
    addItem(item,quantity);
    navigation('/cart')
  }



  return (
    <div className="DivDetail">       
        <div className="DivDetail1">
          <h3 className="H3Detail">{item.name}</h3>
          <img src={item.img} alt="" className="ImgDetail"/>
        </div>
        <div className="DivDetail2">
          <p className="PDetail1">{item.description2}</p>  
          <p className="PDetail2">${item.price}</p>         
          <ItemCount onAdd={handleOnAdd}  stock={5} initial={1}/>
        </div>   
    </div>
  )
}

export default ItemDetail;