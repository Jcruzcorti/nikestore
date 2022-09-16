// import React,{useState,useEffect} from 'react'
import logo2 from '../../imgs/logonike.png';
import './logo.css'

function Logo(){

  // const [welcome,setWelcome] =useState(true) 

  // function welcomeGreet() {
  //   setWelcome(false)
  // }

  // useEffect(()=>{
    
  //   const welcomeGreeting = new Promise((resolve) => {
  //     setTimeout(() => {
  //       if (welcome === true ) {
  //         resolve(false)
  //       }
  //     }, 1000);
  //   })

  //   welcomeGreeting
  //   .then((resolve)=>{setWelcome(resolve);})
  // },[]);

 


  // const h1style = {
  //   color: props.color,
  //   fontSize: props.fontSize
  // } 


  return (
    <div className="a">
      
        {/* <h1 style={h1style}>{props.greeting}</h1> */}
      
        <img src={logo2} alt="Nikelogo" className="LogoBackground"/> 
        <img src={logo2} alt="Nikelogo" className="LogoBackground"/> 
        <img src={logo2} alt="Nikelogo" className="LogoBackground"/> 
      
        {/* <button onClick={welcomeGreet} className="WelcomeButton">CLICK HERE to start the Nike experience</button> */}
        
    </div>
  )
}

export default Logo;