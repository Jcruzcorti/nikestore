import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart.css'
import CartModal from './CartModal'


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
              {/* <p className="DescritpionCart">{item.description}</p> */}
              <p className="PriceCart">Quantity: {item.quantity}</p>
              <p className="PriceCart">Subtotal: ${item.quantity*item.price.toFixed(2)}</p>
              <button onClick={()=>{removeItem(item.id)}} className='RemoveButton' >Remove item</button>
                           
            </div>
          </div>
        ))
      }

      <div>
        {
          cart.length === 0
          ?<>
          <p className='BackHome'>CART IS EMPTY</p>
          <Link to="/">
            <button className='ButtonBack'>Back to Home</button>
          </Link>
          </>
          
          :<>
          <p className="TotalPriceCart">Total: ${totalPrice().toFixed(2)}</p>
          <Link to="/"><button onClick={clear} className='ClearButton'>Clear cart</button></Link>
          <CartModal cart={cart} totalPrice={totalPrice}/>
          </>
          
        }

        {/* {
          cart.length === 0
          ?null
          :<CartModal cart={cart} totalPrice={totalPrice}/>
        } */}
        
      </div>

      
    </div>
  )
}

export default Cart;