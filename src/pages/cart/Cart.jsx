import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart.css'


function Cart() {

  const {cart,removeItem,clear} = useContext(CartContext)

  return (
    <div>

      {
        cart.map((item)=>(
          <div key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.img} alt="" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={()=>{removeItem(item.id)}}>Remove item</button>
          </div>
        ))
      }

      <div>
        {/* <button onClick={clear}>Clear cart</button> */}
        <Link to="/"><button>Back to Home</button></Link>
      </div>

      
    </div>
  )
}

export default Cart;