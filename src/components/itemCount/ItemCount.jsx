import React,{useState} from 'react'
import './itemcount.css'


function ItemCount({stock,initial,onAdd}) {

    const [count,setCount] = useState(initial)



    function Add () {
        if (count<stock){
            setCount(count+1)
        }

        else if (count===stock) {
            setCount(stock);
            alert("No more stock of this product.")  
            
        }
       
    }

    function Subtract() {
        if (count>initial){
            setCount(count-1)
        }
        
    }
    
  return (
    <div>
        <button onClick={Subtract} className="buttonSubtract">-</button>
        <span className="count">{count}</span>
        <button onClick={Add} className="buttonAdd">+</button>
        <button onClick={()=>onAdd(count)}>Add to cart</button>
    </div>
  )
}

export default ItemCount