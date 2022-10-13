import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import Bootrsap from 'bootstrap'
import CartWidget from '../cartWidget/CartWidget'


function NavBar() {

  return (

        <div className="divnav">
                <nav className="navbar navbar-expand-lg navbar-dark " >
                  <div className="container-fluid d-flex flex-row-reverse ">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                      <div className="navbar-nav">                       
                        <li className="navli"><NavLink className="nav-link active" to="/">Home</NavLink></li>
                        <li className="navli"><NavLink className="nav-link active" to="/category/Tiempo">Tiempo</NavLink></li>
                        <li className="navli"><NavLink className="nav-link active" to="/category/Mercurial">Mercurial</NavLink></li>
                        <li className="navli"><NavLink className="nav-link active" to="/category/Phantom">Phantom</NavLink></li>
                        <li className="navli"><NavLink className="nav-link active" to="/category/Premier">Premier</NavLink></li>
                        <CartWidget/>
                      </div>
                    </div>
                  </div>
                </nav>
          </div>
  )
}

export default NavBar;


