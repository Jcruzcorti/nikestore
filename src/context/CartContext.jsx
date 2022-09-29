import React,{createContext, useState} from 'react';
import Swal from 'sweetalert2'


export const CartContext = createContext()


function CartProvider({children}) {

  const [cart,setCart] = useState([])
  


  function addItem(item,quantity) {
    if (isInCart(item.id)) {
      alert("Your product is already in the cart")
    }
    else{
      setCart([...cart,{...item,quantity}])
    }
  }


  function isInCart(id) {
    return cart.some((prod)=>prod.id===id)
  }



  function removeItem(id) {
    const product = cart.filter(prod=>prod.id !== id)
    setCart(product)
  }

  function clear() {
    setCart([])
      Swal.fire({
      position: 'top-end',
      icon: 'success',
      iconColor:'#e66305',
      title: 'The cart is empty.',
      showConfirmButton: false,
      timer: 2500,
      width: "25em",  
      })
  }


  function getTotalItem() {
    let total = 0;
    cart.forEach(item=> total = total + item.quantity);
    return total;
  }


  function totalPrice() {
    let total = 0;
    cart.forEach((item)=>total = total +(item.price * item.quantity));
    return total;
  }

  return (
    <div>
        <CartContext.Provider value={{cart,addItem,removeItem,clear,getTotalItem,totalPrice}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider;