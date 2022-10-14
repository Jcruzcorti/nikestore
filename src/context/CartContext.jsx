import React,{createContext, useState} from 'react';
import Swal from 'sweetalert2'


export const CartContext = createContext()


function CartProvider({children}) {

  const [cart,setCart] = useState([])
  

  function addItem(item,quantity) {
    if (isInCart(item.id)) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        iconColor:'#e66305',
        title: 'Your product is already in the cart',
      })
      
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
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        iconColor:'#e66305',
        title: 'The cart is empty',
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