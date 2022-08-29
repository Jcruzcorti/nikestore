import React from 'react'
import imgcart from './imgcart/cart3.png'

function CartWidget() {
  return (
    <div className="divcartwidget">
        <img src={imgcart} alt="cart" className="imgcart"/>        
    </div>
  )
}

export default CartWidget;