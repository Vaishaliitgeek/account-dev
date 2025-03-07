import React from 'react';
import './Navbar.css';
import { NavLink } from '@remix-run/react';

const Navbar = () => {
  return (
    <div className='nav-main-container'>
      <div className="nav-inner-container">
        <ul className='nav-ul'>
          <li><NavLink to="/">Logo</NavLink></li>
          <li><button className='logout-btn'>Log Out</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
