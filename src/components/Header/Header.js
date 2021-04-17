import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='veg-share-title'>Garden Party</h1>
      <div className='header-links'>
        <Link className='home-link' to='/'>Home</Link>
        <Link className='profile-link' to='/profile'>Profile</Link>
        <Link className='logout-link'>Logout</Link>
      </div>
    </header>
  )
}

export default Header;
