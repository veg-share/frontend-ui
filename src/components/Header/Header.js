import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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
        <button className='home-link hidden'>
          <Link className='home-link hidden' to='/' onClick={() => toggleLink()}>To Home</Link>
        </button>
        <button className='profile-link'>
          <Link className='profile-link' to='/profile' onClick={() => toggleLink()}>To Profile</Link>
        </button>
      </div>
    </header>
  )
}

export default Header;
