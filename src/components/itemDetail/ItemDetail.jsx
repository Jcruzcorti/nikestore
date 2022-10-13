import React, { useState,useContext } from 'react'
import {useNavigate } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import './itemdetail.css'
import { CartContext } from '../../context/CartContext';

// import Select from 'react-select'



function ItemDetail({item}) {

  const [addCart, setAddCart] = useState(0)

  const {addItem} =useContext(CartContext);

  const navigation = useNavigate()

  function handleOnAdd(quantity) {
    setAddCart(quantity);
    addItem(item,quantity);
    navigation('/cart')
  }






  // function handleOnAddSelect(size) {
  //   setAddCart(size);
  //   addItem(item,quantity);
  // }

  return (
    <div className="DivDetail">       
        <div className="DivDetail1">
          <h3 className="H3Detail">{item.name}</h3>
          <img src={item.img} alt="" className="ImgDetail"/>
        </div>
        <div className="DivDetail2">
          <p className="PDetail1">{item.description2}</p>
          <div className='DivSelectPrice'>
            <p className="PDetail2">${item.price}</p>
            {/* <p className="PDetail2">${item.size}</p> */}
            {/* <MyComponent  onAdd={handleOnAdd} options= {[
        { value: '8 us', label: '8 us' },
        { value: '8.5 us', label: '8.5 us' },
        { value: '9 us', label: '9 us' },
        { value: '9.5 us', label: '9.5 us' },
        { value: '10 us', label: '10 us' },
        { value: '10.5 us', label: '10.5 us' },
        ]}/> */}
           

          </div>
          
          {/* {
            addCart === 0
            ?<ItemCount onAdd={handleOnAdd} stock={5} initial={1}/>
            : <Link to="/cart"><button>Go to cart</button></Link>
          } */}
          <ItemCount onAdd={handleOnAdd}  stock={5} initial={1}/>
        </div>   
    </div>
  )
}

export default ItemDetail;