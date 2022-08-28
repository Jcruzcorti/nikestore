import React from 'react'
import './navbar.css'
// import {NavLink} from 'react-router-dom'
import Bootrsap from 'bootstrap'



function NavBar() {
  return (
    <div className="divnav">
        <nav className="navbar navbar-expand-lg navbar-dark " >
          <div className="container-fluid">
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <li className="navli"><a className="nav-link active" href="#">Inicio</a></li>
                <li className="navli"><a className="nav-link active" href="#">Tiempo</a></li>
                <li className="navli"><a className="nav-link active" href="#">Mercurial</a></li>
                <li className="navli"><a className="nav-link active" href="#">Phantom</a></li>
                <li className="navli"><a className="nav-link active" href="#">Premier</a></li>
                <li className="navli"><a className="nav-link active" href="#">cartwidget</a></li>
              </div>
            </div>
          </div>
        </nav>
  </div>
  )
}

export default NavBar;


