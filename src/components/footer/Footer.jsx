import React from 'react'
import './footer.css'
import logo from '../../imgs/logonike.png'

function Footer() {

  return (
    <div className='DivFooter'>
      <img src={logo} alt="Logofooter" className='LogoFooter'/>
      <p className='FooterP'>© 2021 Nike, Inc. All Rights Reserved</p>
    </div>
  )
    
}

export default Footer;