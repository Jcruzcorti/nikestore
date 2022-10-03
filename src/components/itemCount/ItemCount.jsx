import React,{useState} from 'react'
import './itemcount.css'
import Swal from 'sweetalert2'

function ItemCount({stock,initial,onAdd}) {

    const [count,setCount] = useState(initial)



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
    
  return (
    <div className='asa'>
        <button onClick={Subtract} className="buttonSubtract">-</button>
        <span className="count">{count}</span>
        <button onClick={Add} className="buttonAdd">+</button>
        <button onClick={()=>onAdd(count)}  className="buttonAddToCart">Add to cart</button>
    </div>
  )
}

export default ItemCount