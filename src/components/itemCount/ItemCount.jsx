import React,{useState} from 'react'
import './itemcount.css'
import Swal from 'sweetalert2'
// import MyComponent from '../select/Select';
// import Select from 'react-select'

function ItemCount({stock,initial,onAdd}) {

    const [count,setCount] = useState(initial)

// {INTENTAR PASARLE AL BOTON DE ITEMCOUNT UNA FUNCION PARA QUE SE SETEE TAMBIEN EL SIZE ACTUALIZADO}LISTO
// {INTENTAR QUE AL APRETAR BOTON ADD TO CART, SE SETEE TAMBIEN AL CART EL SIZE DEL BOTIN}
// {SI NO SE PUEDE LO ANTERIOR, BUSCAR EN GOOGLE CASOS DE ECOMMERCE CON SIZE DINÁMICO (NO ESTATICO COMO EL STOCK DE ESTE)}

    function Add () {
        if (count<stock){
            setCount(count+1)
        }

        else if (count===stock) {
            setCount(stock);
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
                title: 'You reached the stock limit',
              })
            
        }
       
    }

    function Subtract() {
        if (count>initial){
            setCount(count-1)
        }
        
    }
    


  //   const [size,setSize] = useState({
  //     value:"", 
  //     label:""
  // })
  // const [showSize, setShowSize] = useState(true)
  
  // const options = [
  //     { value: '8 us', label: '8 us' },
  //     { value: '8.5 us', label: '8.5 us' },
  //     { value: '9 us', label: '9 us' },
  //     { value: '9.5 us', label: '9.5 us' },
  //     { value: '10 us', label: '10 us' },
  //     { value: '10.5 us', label: '10.5 us' },
      
    
  //   ]
  
  
  // function handleSelect({value}) {
  //     setSize(value)
  //     setShowSize(false)
  //     console.log(value);
  // }
  
// function sendSize() {
//     // handleSelect(setSize(value));
//     // console.log(setSize)
//     setSize(value)
  
//     console.log(handleSelect)
//   }
  


  return (
   

      
        <div className='DivItemCount'>
            <button onClick={Subtract} className="buttonSubtract">-</button>
            <span className="count">{count}</span>
            <button onClick={Add} className="buttonAdd">+</button>
            <button onClick={()=>{onAdd(count)}} className="buttonAddToCart">Add to cart</button>
        </div>

  
    
  )
}

export default ItemCount

// <button onClick={()=>{
//                onAdd(count);
//                handleSelect(size);
//               }}
//               className="buttonAddToCart">Add to cart</button>