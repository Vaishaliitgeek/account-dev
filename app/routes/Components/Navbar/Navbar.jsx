import React from 'react'
import './Navbar.css'
import { NavLink } from '@remix-run/react'

const Navbar = () => {
  return (
    <>
    <div className='nav-main-container'>
      <ul>
        <li><NavLink>Logo</NavLink></li>
        <li><button>LogOutp</button></li>
      </ul>

    </div>

    </>
  )
}

export default Navbar