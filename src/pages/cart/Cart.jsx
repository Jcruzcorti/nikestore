import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart.css'


function Cart() {

  const {cart,removeItem,clear,totalPrice} = useContext(CartContext)



  return (
    <div>

      {
        cart.map((item)=>(
          <div key={item.id} className="DivCart">
            <div className="DivCartSecond">

              <h3 className="H3Cart">{item.name}</h3>
              <img src={item.img} alt="" className="ImgCart"/>
              <p className="DescritpionCart">{item.description}</p>
              <p className="PriceCart">Quantity: {item.quantity}</p>
              <p className="PriceCart">Subtotal: ${item.quantity*item.price}</p>
              <button onClick={()=>{removeItem(item.id)}} >Remove item</button>
                           
            </div>
          </div>
        ))
      }

      <div>
        {
          cart.length === 0
          ?<Link to="/"><button>Back to Home</button></Link>
          :<Link to="/"><button onClick={clear} >Clear cart</button></Link>
        }

        {
          cart.length === 0
          ?null
          :<p className="TotalPriceCart">Total: ${totalPrice()}</p>
        }
        
      </div>

      
    </div>
  )
}

export default Cart;