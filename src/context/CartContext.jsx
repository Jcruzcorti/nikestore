import React,{createContext, useState} from 'react';


export const CartContext = createContext()


function CartProvider({children}) {

  const [cart,setCart] = useState([])
  


  function addItem(item,quantity) {
    if (isInCart(item.id)) {
      alert("Your item is already in the cart")
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
  }



  return (
    <div>
        <CartContext.Provider value={{cart,addItem,removeItem,clear}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider;