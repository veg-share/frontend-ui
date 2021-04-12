import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Veg-Share</h1>
      <Link className='profile-link' to='/profile'>Profile</Link>
      <Link className='logout-link'>Logout</Link>
    </header>
  )
}

export default Header;