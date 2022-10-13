// import React,{useState} from 'react'
// import Select from 'react-select'
// import './select.css'
// import Swal from 'sweetalert2'
// // import {addSize} from '../../services/Firestore'


// function MyComponent(props) {

//     const [size,setSize] = useState({
//         value:"", 
//         label:""
//     })
//     const [showSize, setShowSize] = useState(true)

//     const options = [
//         { value: '8 us', label: '8 us' },
//         { value: '8.5 us', label: '8.5 us' },
//         { value: '9 us', label: '9 us' },
//         { value: '9.5 us', label: '9.5 us' },
//         { value: '10 us', label: '10 us' },
//         { value: '10.5 us', label: '10.5 us' },
        
      
//       ]


//     function handleSelect({value}) {
//         setSize(value)
//         setShowSize(false)
//     }




//     // function handleSize(e) {
        
    
//     //     const sizeSelect = {
//     //     size,
//     //     }
        
//     //     if (size.value=== "") {
//     //      alert("casi")
//     //     }
//     //     else{
//     //         addSize(sizeSelect).then((sizeCreated)=>{
            
//     //         //   clear();
//     //           console.log(sizeCreated);
      
//     //          alert("casi wacho")
              
//     //           });
//     //         } 

//     // }













//     return (

//         <div className='DivSelect'>                      
//             {
//                 showSize
//                     ?null
//                     :<p className="PDetailSize">Size: {size}</p>
//             }
//         <Select options={options} onChange={handleSelect} defaultValue={{label: "Size", value: "Size"}} pSelect={size} />

//         {/* <button onClick={()=>handleSize(size)}  className="buttonAddToCart">Confirm size</button> */}
        
//         </div>
//     )
// };


// export default MyComponent;



    // const [size,setSize] = useState([])

    // if (options.label==="9 us") {
    //     setSize(size)
    // }
    //  else if (options.label==="8.5 us") {
    //     setSize(size)
    //     console.log(setSize);
    // }
    // else if (options.label==="9 us") {
    //     setSize(size)
    // }
    // else if (options.label==="9.5 us") {
    //     setSize(size)
    // }
    // else if (options.label==="10 us") {
    //     setSize(size)
    // }
    // else if (options.label==="10.5 us") {
    //     setSize(size)
    // }

    // else{
    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 2500,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //           toast.addEventListener('mouseenter', Swal.stopTimer)
    //           toast.addEventListener('mouseleave', Swal.resumeTimer)
    //         }
    //       })
          
    //       Toast.fire({
    //         icon: 'error',
    //         iconColor:'#e66305',
    //         title: 'Choose your size please',
    //       })