import React from 'react'
import logo2 from '../../imgs/logonike.png';
import './logo.css'

function Logo(){

  return (
    <div className="a">
       
      <img src={logo2} alt="Nikelogo" className="LogoBackground"/> 
      <img src={logo2} alt="Nikelogo" className="LogoBackground"/> 
      <img src={logo2} alt="Nikelogo" className="LogoBackground"/>

      <p className="PLoading">Loading page...</p> 
      
    </div>
  )
}

export default Logo;