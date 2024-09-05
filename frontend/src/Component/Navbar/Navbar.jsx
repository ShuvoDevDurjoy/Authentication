import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_container'>
      <div className="navbar_left">
          <Link className='sign-up' to="/sign_up">Sign Up</Link>
      </div>
      <div className="navbar_right">
          <Link className='login' to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar
