import React, { useState,useContext } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import CartForm from './CartForm';
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext';
import {buyOrder} from '../../services/Firestore'
import {useNavigate} from 'react-router-dom'



function ModalCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigation = useNavigate()

  const {cart,clear,totalPrice} = useContext(CartContext)
  
  const [buyer,setBuyer]=useState({
    name: "",
    phone: "",
    email: ""
  })

  function handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;

    setBuyer({
        ...buyer,
        [field]:value,

    })
    
  } 


  function handleFin(e) {
    e.preventDefault();

    const dataOrden = {
      buyer,
      items: cart,
      total: totalPrice(),
    


    }
    if (buyer.name=== "") {
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
        title: 'To finalize the purchase, please enter your data in the form.',
      })
     
    }
    else if (buyer.phone=== "") {
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
        title: 'To finalize the purchase, please enter your data in the form.',
      })
    }
    else if (buyer.email=== "") {
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
        title: 'To finalize the purchase, please enter your data in the form.',
      })
    }
        
    else{
      buyOrder(dataOrden).then((orderCreated)=>{
      
        clear();
        console.log(orderCreated.id);

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
            icon: 'success',
            
            title: 'The purchase has been successfully completed.',
          })  

        navigation('/') 
        });
      } 

}


  return (
    <>
      
        <button className='ClearButton' onClick={handleShow}>Checkout</button>
        {/* <button className='BuyButton2' onClick={handleShow}>
          Just do it
        </button> */}

        

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Complete the order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Full Name</label>
                <input onChange={handleChange} type="text" name='name' className="form-control" id="formGroupExampleInput" placeholder="Full name" aria-required/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Phone number</label>
                <input onChange={handleChange} type="number" name='phone' className="form-control" id="formGroupExampleInput2" placeholder="Phone number" aria-required/>
            </div>
            <div>
                <label htmlFor="formGroupExampleInput2">E-mail</label>
                <input onChange={handleChange} type="email" name='email' className="form-control" id="formGroupExampleInput2" placeholder="E-mail" aria-required/>
            </div>
              <p className="TotalPriceCartForm">Total: ${totalPrice().toFixed(2)}</p>
          </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='ClearButton' onClick={handleClose}>Close</button>        
          <button onClick={handleFin} className='BuyButton'></button>    
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCart;
