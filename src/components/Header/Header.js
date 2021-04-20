import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  const toggleLink = () => {
    const homeLink = document.querySelector('.home-link')
    const profileLink = document.querySelector('.profile-link')
    homeLink.classList.toggle('hidden')
    profileLink.classList.toggle('hidden')
  }

  return (
    <header className='header'>
      <h1 className='veg-share-title'>Garden Party</h1>
      <div className='header-links'>
        <button className='link-button'>
          <Link className='home-link hidden' to='/' onClick={() => toggleLink()}>Home</Link>
          <Link className='profile-link' to='/profile' onClick={() => toggleLink()}>Profile</Link>
        </button>
      </div>
    </header>
  )
}

export default Header;
