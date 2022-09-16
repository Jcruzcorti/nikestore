import React, { useState,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom';
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
    <div>       
        <h3>{item.name}</h3>
        <img src={item.img} alt="" />
        <p>{item.description}</p>
        <p>${item.price}</p>
        {
          addCart === 0
          ?<ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>
          : <Link to="/cart"><button>Go to cart</button></Link>
        }
        
    </div>
  )
}

export default ItemDetail;