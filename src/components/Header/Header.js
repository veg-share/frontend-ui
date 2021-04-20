import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {

  const toggleLink = () => {
    const homeLink = document.querySelectorAll('.home-link')
    const profileLink = document.querySelectorAll('.profile-link')
    homeLink.forEach(e => e.classList.toggle('hidden'))
    profileLink.forEach(e => e.classList.toggle('hidden'))
  }

  return (
    <header className='header'>
      <h1 className='veg-share-title'>Garden Party</h1>
      <div className='header-links'>
        <button className='home-link link-button hidden'>
          <Link className='home-link hidden' to='/' onClick={() => toggleLink()}>Home</Link>
        </button>
        <button className='profile-link link-button'>
          <Link className='profile-link' to='/profile' onClick={() => toggleLink()}>Profile</Link>
        </button>
      </div>
    </header>
  )
}

export default Header;
