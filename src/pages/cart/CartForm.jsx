// import React,{useContext, useState} from 'react'
// import { CartContext } from '../../context/CartContext';


// function CartForm() {

//     const {totalPrice} = useContext(CartContext)
//     const [buyer, setBuyer] = useState(
//         {
//             name: "",
//             phone: "",
//             email:""
//         })


//         function handleChange(e) {
//             const field = e.target.name;
//             const value = e.target.value;
    
//             setBuyer({
//                 ...buyer,
//                 [field]:value,
        
//             })
            
//         } 
        


//   return (
//     <div>

//         <form>
//         <div className="form-group">
//             <label htmlFor="formGroupExampleInput">Full Name</label>
//             <input onChange={handleChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Full name" aria-required/>
//         </div>
//         <div class="form-group">
//             <label htmlFor="formGroupExampleInput2">Phone number</label>
//             <input onChange={handleChange} type="number" className="form-control" id="formGroupExampleInput2" placeholder="Phone number" aria-required/>
//         </div>
//         <div>
//             <label htmlFor="formGroupExampleInput2">E-mail</label>
//             <input onChange={handleChange} type="email" className="form-control" id="formGroupExampleInput2" placeholder="E-mail" aria-required/>
//         </div>
//         <p className="TotalPriceCartForm">Total: ${totalPrice().toFixed(2)}</p>
//         </form>

//     </div>
//   )
// }

// export default CartForm;