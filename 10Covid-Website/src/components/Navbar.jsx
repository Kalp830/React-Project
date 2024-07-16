import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <>

      <div className='top-header'>
         <div className='container'>
           <div className='row'>
           <div className='col d-flex align-items-center'>
           <img src='./images/covidlogo.png' alt='Logo'/>
           </div>
           <div className='col'>
              <header className="header d-flex justify-content-end align-items-center">
                <nav className='navbar navbar-expand-lg'>
                  <ul className='navbar-nav'>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/report'>Report</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/center'>Center</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                    </li>
                  </ul>
                </nav>
            </header>
           </div>
              </div>
         </div>
    
     </div>
    </>
  )
}

export default Navbar
