import React,{useContext} from 'react'
import './cartwidget.css'
import imgcart from './imgcart/cart3.png'
import { CartContext } from '../../context/CartContext';
import {NavLink} from 'react-router-dom'

function CartWidget() {

 const {getTotalItem} = useContext(CartContext)

  return (
    <div className="divcartwidget">
        <li className="navli"><NavLink className="nav-link active" to="/cart"><img src={imgcart} alt="cart" className="imgcart"/>   </NavLink></li>
          
        {
          getTotalItem() === 0
          ? null
          : <p className="nav-p">{getTotalItem()}</p>
        }    
    </div>
  )
}

export default CartWidget;